'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var wduckApi_1 = require("../../../utilities/wduckApi");
var variables_express_1 = require("../../../config/variables.express");
// Creates Commission request Item.
exports.createCommissionRequest = function (req, res, next) {
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
    wduckApi_1.submitMessage({
        from: {
            name: 'Commissions',
            address: variables_express_1.NM_NOREPLY_EMAIL
        },
        to: [{
                name: 'Commissions',
                address: 'kylo@pencil4life.com' || variables_express_1.NM_COMMISSIONS_EMAIL,
            }],
        subject: 'Testing',
        text: '',
        html: '',
    }).then(function (info) {
        console.log(info);
        res.send(info);
    }).catch(function (error) {
        next(error);
    });
};
exports.default = { createCommissionRequest: exports.createCommissionRequest };
