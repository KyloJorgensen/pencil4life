'use strict';

import { join } from 'path';
import { submitMessage } from '../../../utilities/wduckApi';
import { NM_COMMISSIONS_EMAIL, NM_NOREPLY_EMAIL } from '../../../config/variables.express';
import { ICommissionsModel, Commissions } from './commissions.model';

// Creates Commission request Item.
export const createCommissionRequest = (req, res, next) => {
    let newCommissionRequest: ICommissionsModel;
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

    let query = Commissions.create(newCommissionRequest);
    query.then((commissionRequest) => {
        return     submitMessage({
            from: {
                name: 'Commissions',
                address: NM_NOREPLY_EMAIL
            },
            to: [{
                name: 'Commissions', 
                address: NM_COMMISSIONS_EMAIL,
            }],
            bcc: [{
                name: 'Kylo', 
                address: 'kylo@pencil4life.com'
            }],
            subject: 'Commission Request',
            text: '',
            html: `<div>
                <h1>${commissionRequest.requestor}</h1>
                <p>${commissionRequest.email}</p>
                <div>${commissionRequest.details}</div>
            </div>`
        })
    }).then(info => {
        console.log(info);
        res.send(info);
        // res.status(200).json({_id: commissionRequest._id});    
    }).catch(function(error) {
        console.log(error)
        next(error);
    });

    


}

export default { createCommissionRequest };