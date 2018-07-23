'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var wduckApi_1 = require("../../../utilities/wduckApi");
var variables_express_1 = require("../../../config/variables.express");
var commissions_model_1 = require("./commissions.model");
// Creates Commission request Item.
exports.createCommissionRequest = function (req, res, next) {
    var newCommissionRequest = {};
    if ('body' in req) {
        if ('requestor' in req.body) {
            newCommissionRequest.requestor = req.body.requestor;
        }
        else {
            var error = new Error('missing requestor');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('email' in req.body) {
            newCommissionRequest.email = req.body.email;
        }
        else {
            var error = new Error('missing email');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('details' in req.body) {
            newCommissionRequest.details = req.body.details;
        }
        else {
            var error = new Error('missing details');
            error.name = 'BadRequestError';
            return next(error);
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = commissions_model_1.Commissions.create(newCommissionRequest);
    query.then(function (commissionRequest) {
        return wduckApi_1.submitMessage({
            from: {
                name: 'Commissions',
                address: variables_express_1.NM_NOREPLY_EMAIL
            },
            to: [{
                    name: 'Commissions',
                    address: variables_express_1.NM_COMMISSIONS_EMAIL,
                }],
            bcc: [{
                    name: 'Kylo',
                    address: 'kylo@pencil4life.com'
                }],
            subject: 'Commission Request',
            text: '',
            html: "<div>\n                <h1>" + commissionRequest.requestor + "</h1>\n                <p>" + commissionRequest.email + "</p>\n                <div>" + commissionRequest.details + "</div>\n            </div>"
        });
    }).then(function (info) {
        console.log(info);
        res.send(info);
        // res.status(200).json({_id: commissionRequest._id});    
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
exports.default = { createCommissionRequest: exports.createCommissionRequest };
