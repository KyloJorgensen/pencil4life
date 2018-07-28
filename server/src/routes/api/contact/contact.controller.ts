'use strict';

import { submitMessage } from '../../../utilities/wduckApi';
import { NM_COMMISSIONS_EMAIL, NM_NOREPLY_EMAIL, NM_CONTACT_EMAIL } from '../../../config/variables.express';
import { ContactMessage } from './contact.model';
import { Response, Request, NextFunction } from 'express';


// Creates Contact request Item.
export const createContactMessage = (req: Request, res: Response, next: NextFunction) => {
    let newContactMessage: {
        requestor?: string;
        email?: number;
        details?: string;
    } = {};
    if ('body' in req) {
        if ('requestor' in req.body) {
            newContactMessage.requestor = req.body.requestor;
        } else {
            var error = new Error('missing requestor');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('email' in req.body) {
            newContactMessage.email = req.body.email;
        } else {
            var error = new Error('missing email');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('details' in req.body) {
            newContactMessage.details = req.body.details;
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

    ContactMessage.create(newContactMessage)
    .then((commissionRequest) => {
        let message = `<div>
            <p>Requestor: ${commissionRequest.requestor}</p>
            <p>Email: ${commissionRequest.email}</p>
            <p>Details:</p>
            <div>${commissionRequest.details}</div>
        </div>`;
        return submitMessage({
            from: {
                name: 'Contacts Request',
                address: NM_NOREPLY_EMAIL
            },
            to: [{
                name: 'Contact Message', 
                address: NM_CONTACT_EMAIL,
            }],
            subject: 'Contact Request',
            text: message.replace(/<\s*br[^>]?>/,'\n').replace(/(<([^>]+)>)/g, ""),
            html: message,
        })
    }).then(info => {
        res.send(info);
    }).catch((error) => {
        if (error != 'breakWithOutError')
        next(error);
    });
}