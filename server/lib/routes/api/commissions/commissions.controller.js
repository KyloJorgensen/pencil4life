'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var wduckApi_1 = require("../../../utilities/wduckApi");
var variables_express_1 = require("../../../config/variables.express");
var commissions_model_1 = require("./commissions.model");
// export const createCommissionsToggle = () => {
//     return CommissionsToggle.create({})
//     .then((newtoggle) => {
//         return [newtoggle]
//     }).catch((error) => {
//         throw new Error(error);
//     })
// }
// Checks if Commissions are being Accepted
var checkIfCommissionsAloud = function () {
    return commissions_model_1.CommissionsToggle.find()
        .then(function (toggle) {
        if (toggle.length == 0) {
            commissions_model_1.CommissionsToggle.create({}, function (error, newtoggle) {
                if (error)
                    throw new Error(error);
                toggle = [newtoggle];
            });
        }
        return toggle[0];
    }).then(function (toggle) {
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
    });
};
// On get return if commssions are aloud
exports.commissionsAloud = function (req, res, next) {
    checkIfCommissionsAloud()
        .then(function (toggle) {
        res.send(toggle);
    })
        .catch(function (error) {
        next(error);
    });
};
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
    checkIfCommissionsAloud()
        .then(function (toggle) {
        if (!toggle) {
            res.status(400).send({
                message: 'Not accepting Commissions'
            });
            throw 'breakWithOutError';
        }
        return commissions_model_1.Commissions.create(newCommissionRequest);
    })
        .then(function (commissionRequest) {
        var message = "<div>\n            <p>Requestor: " + commissionRequest.requestor + "</p>\n            <p>Email: " + commissionRequest.email + "</p>\n            <p>Details:</p>\n            <div>" + commissionRequest.details + "</div>\n        </div>";
        return wduckApi_1.submitMessage({
            from: {
                name: 'Commission Request',
                address: variables_express_1.NM_NOREPLY_EMAIL
            },
            to: [{
                    name: 'Commissions',
                    address: variables_express_1.NM_COMMISSIONS_EMAIL,
                }],
            subject: 'Commission Request',
            text: message.replace(/<\s*br[^>]?>/, '\n').replace(/(<([^>]+)>)/g, ""),
            html: message,
        });
    }).then(function (info) {
        commissions_model_1.CommissionsToggle.findOne()
            .then(function (toggle) {
            if (toggle.limit) {
                toggle.limit--;
                toggle.markModified('limit');
                toggle.save().catch(function (error) {
                    console.error(error);
                });
            }
            res.send(info);
        }).catch(function (error) {
            next(error);
        });
    }).catch(function (error) {
        if (error != 'breakWithOutError')
            next(error);
    });
};
exports.updateCommissionToggle = function (req, res, next) {
    var changesCommissionToggle = {};
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
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    commissions_model_1.CommissionsToggle.update({}, { $set: changesCommissionToggle }, { upsert: true, setDefaultsOnInsert: true })
        .then(function () {
        return commissions_model_1.CommissionsToggle.find();
    }).then(function (toggle) {
        res.send(toggle[0]);
    }).catch(function (error) {
        next(error);
    });
};
exports.getCommissionsToggle = function (req, res, next) {
    commissions_model_1.CommissionsToggle.findOne()
        .then(function (toggle) {
        res.send(toggle);
    }).catch(function (error) {
        next(error);
    });
};
