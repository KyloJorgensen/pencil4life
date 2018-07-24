'use strict';

import { submitMessage } from '../../../utilities/wduckApi';
import { NM_COMMISSIONS_EMAIL, NM_NOREPLY_EMAIL } from '../../../config/variables.express';
import { Commissions, CommissionsToggle, ICommissionsToggle } from './commissions.model';
import { Response, Request, NextFunction } from 'express';

// export const createCommissionsToggle = () => {
//     return CommissionsToggle.create({})
//     .then((newtoggle) => {
//         return [newtoggle]
//     }).catch((error) => {
//         throw new Error(error);
//     })
// }

// Checks if Commissions are being Accepted
const checkIfCommissionsAloud = () => {
    return CommissionsToggle.find()
    .then((toggle) => {
        if (toggle.length == 0) {
            CommissionsToggle.create({}, (error, newtoggle) => {
                if (error) throw new Error(error);
                toggle = [newtoggle];
            });
        }
        return toggle[0];
    }).then((toggle: ICommissionsToggle) =>{
        if (toggle.end_date > new Date()) {
            if (toggle.start_date > new Date()) {
                return false;
            }
            return true;
        }
        if (toggle.limit > 0) {
            return true;
        }       
        if (toggle.accepting) {
            return true;
        } 
        return false;
    })
}

// On get return if commssions are aloud
export const commissionsAloud = (req: Request, res: Response, next: NextFunction) => {
    checkIfCommissionsAloud()
    .then((toggle) => { 
        res.send(toggle);
    })
    .catch((error) => {
        next(error);
    });
}


// Creates Commission request Item.
export const createCommissionRequest = (req: Request, res: Response, next: NextFunction) => {
    let newCommissionRequest: {
        requestor?: string;
        email?: number;
        details?: string;
    } = {};
    if ('body' in req) {
        if ('requestor' in req.body) {
            newCommissionRequest.requestor = req.body.requestor;
        } else {
            var error = new Error('missing requestor');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('email' in req.body) {
            newCommissionRequest.email = req.body.email;
        } else {
            var error = new Error('missing email');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('details' in req.body) {
            newCommissionRequest.details = req.body.details;
        } else {
            var error = new Error('missing details');
            error.name = 'BadRequestError'
            return next(error);
        }
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    checkIfCommissionsAloud()
    .then((toggle) => {
        if (!toggle) {
            res.status(400).send({
                message: 'Not accepting Commissions'
            });
            
            throw 'breakWithOutError';
        }
        return Commissions.create(newCommissionRequest)
    })
    .then((commissionRequest) => {
        let message = `<div>
            <p>Requestor: ${commissionRequest.requestor}</p>
            <p>Email: ${commissionRequest.email}</p>
            <p>Details:</p>
            <div>${commissionRequest.details}</div>
        </div>`;
        return submitMessage({
            from: {
                name: 'Commissions Request',
                address: NM_NOREPLY_EMAIL
            },
            to: [{
                name: 'Commissions', 
                address: NM_COMMISSIONS_EMAIL,
            }],
            subject: 'Commission Request',
            text: message.replace(/<\s*br[^>]?>/,'\n').replace(/(<([^>]+)>)/g, ""),
            html: message,
        })
    }).then(info => {
        CommissionsToggle.findOne()
        .then((toggle) => {
            if (toggle.limit) {
                toggle.limit--;
                toggle.markModified('limit');
                toggle.save().catch((error) => {
                    console.error(error);
                });
            }
            res.send(info);
        }).catch((error) => {
            next(error);
        });

    }).catch((error) => {
        if (error != 'breakWithOutError')
        next(error);
    });
}

export const updateCommissionToggle = (req: Request, res: Response, next: NextFunction) => {
    let changesCommissionToggle: {  
        accepting?: boolean;
        limit?: number;
        start_date?: Date;
        end_date?: Date;
        comment?: String;
    } = {};
    if ('body' in req) {
        if ('accepting' in req.body) {
            changesCommissionToggle.accepting = req.body.accepting;
        }
        if ('limit' in req.body) {
            changesCommissionToggle.limit = Number(req.body.limit);
        }
        if ('start_date' in req.body) {
            changesCommissionToggle.start_date = req.body.start_date;
        }
        if ('end_date' in req.body) {
            changesCommissionToggle.end_date = req.body.end_date;
        }
        if ('comment' in req.body) {
            changesCommissionToggle.comment = req.body.comment;
        }
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    CommissionsToggle.update({}, {$set: changesCommissionToggle}, {upsert: true, setDefaultsOnInsert: true})
    .then(() => {
        return CommissionsToggle.find()
    }).then((toggle) => {
        res.send(toggle[0]);
    }).catch((error) => {
        next(error);
    });
}

export const getCommissionsToggle = (req: Request, res: Response, next: NextFunction) => {
    CommissionsToggle.findOne()
    .then((toggle) => {
        res.send(toggle);
    }).catch((error) => {
        next(error);
    });
};