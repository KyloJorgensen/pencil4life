'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var wduckApi_1 = require("../../../utilities/wduckApi");
var variables_express_1 = require("../../../config/variables.express");
var contact_model_1 = require("./contact.model");
// Creates Contact request Item.
exports.createContactMessage = function (req, res, next) {
    var newContactMessage = {};
    if ('body' in req) {
        if ('requestor' in req.body) {
            newContactMessage.requestor = req.body.requestor;
        }
        else {
            var error = new Error('missing requestor');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('email' in req.body) {
            newContactMessage.email = req.body.email;
        }
        else {
            var error = new Error('missing email');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('details' in req.body) {
            newContactMessage.details = req.body.details;
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
    contact_model_1.ContactMessage.create(newContactMessage)
        .then(function (commissionRequest) {
        var message = "<div>\n            <p>Requestor: " + commissionRequest.requestor + "</p>\n            <p>Email: " + commissionRequest.email + "</p>\n            <p>Details:</p>\n            <div>" + commissionRequest.details + "</div>\n        </div>";
        return wduckApi_1.submitMessage({
            from: {
                name: 'Contacts Request',
                address: variables_express_1.NM_NOREPLY_EMAIL
            },
            to: [{
                    name: 'Contact Message',
                    address: variables_express_1.NM_CONTACT_EMAIL,
                }],
            subject: 'Contact Request',
            text: message.replace(/<\s*br[^>]?>/, '\n').replace(/(<([^>]+)>)/g, ""),
            html: message,
        });
    }).then(function (info) {
        res.send(info);
    }).catch(function (error) {
        if (error != 'breakWithOutError')
            next(error);
    });
};
