'use strict';

import { submitMessage } from '../../../utilities/wduckApi';
import { NM_COMMISSIONS_EMAIL, NM_NOREPLY_EMAIL } from '../../../config/variables.express';

// Creates Commission request Item.
export const createCommissionRequest = (req, res, next) => {
    // let changes:IShopItemModel;
    // if ('body' in req) {
    //     if ('name' in req.body) {
    //         changes.name = req.body.name;
    //     } else {
    //         var error = new Error('missing name');
    //         error.name = 'BadRequestError'
    //         return next(error);
    //     }
    //     if ('price' in req.body) {
    //         changes.price = req.body.price;
    //     } 
    //     if ('stock' in req.body) {
    //         changes.stock = req.body.stock;
    //     } 
    //     if ('sold' in req.body) {
    //         changes.sold = req.body.sold;
    //     } 
    //     if ('discontinued' in req.body) {
    //         changes.discontinued = req.body.discontinued;
    //     }
    // } else {
    //     var error = new Error('missing body');
    //     error.name = 'BadRequestError'
    //     return next(error);
    // }
    // changes.created_by = req.session._userId;
    // changes.updated_by = req.session._userId;

    // let query = ShopItem.create(changes);
    // query.then(function(shopItemDoc) {
    //     res.status(200).json({_id: shopItemDoc._id});    
    // }).catch(function(error) {
    //     console.log(error)
    //     next(error);
    // });

    
    submitMessage({
        from: {
            name: 'Commissions',
            address: 'noreply@dev.pencil4life.com' ||NM_NOREPLY_EMAIL
        },
        to: [{
            name: 'Commissions', 
            address: 'kylo@pencil4life.com' || NM_COMMISSIONS_EMAIL,
        }],
        subject: 'Testing',
        text: '',
        html: '',
    }).then(info => {
        console.log(info);
        res.send(info);
    }).catch((error: Error) => {
        next(error);
    });

}

export default { createCommissionRequest };