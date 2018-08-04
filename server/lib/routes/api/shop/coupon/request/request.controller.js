'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var request_model_1 = require("./request.model");
var user_model_1 = require("../../../user/user.model");
var op = require("object-path");
// Creates CouponRequest.
exports.createCouponRequest = function (req, res, next) {
    var changes = {
        _couponId: '',
        quantity: 0,
        requestDate: new Date(),
    };
    changes.requestDate.setHours(changes.requestDate.getHours() + 1);
    if ('_userId' in req.session) {
        changes._userId = req.session._userId;
    }
    else {
        changes._sessionId = req.session.id;
    }
    if ('body' in req) {
        var body = req.body;
        if ('_couponId' in body) {
            changes._couponId = body._couponId;
        }
        else {
            var error = new Error('missing _couponId');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('quantity' in body) {
            changes.quantity = body.quantity;
        }
        else {
            var error = new Error('missing quantity');
            error.name = 'BadRequestError';
            return next(error);
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = request_model_1.CouponRequest.create(changes);
    query.then(function (couponRequestDoc) {
        res.status(200).json({ _id: couponRequestDoc._id });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns shops name
exports.getCouponRequest = function (req, res, next) {
    var query;
    var adminfields = [];
    var sessionUserId = op.get(req, ['session', '_userId'], false);
    if (sessionUserId) {
        user_model_1.User.findOne({ _id: req.params._itemRequestId }, function (error, user) {
            var conditions = {
                _id: req.params._itemRequestId
            };
            if (user.admin) {
                adminfields = [];
            }
            else {
                conditions._userId = req.session._userId;
            }
            query = request_model_1.CouponRequest.findOne(conditions);
        });
    }
    else {
        query = request_model_1.CouponRequest.findOne({ _id: req.params._itemRequestId, _sessionId: req.session.id });
    }
    query.select(adminfields.map(function (field) { return "-" + field; }).join(' '));
    query.then(function (itemRequestDoc) {
        if (itemRequestDoc) {
            res.status(200).json(itemRequestDoc);
        }
        else {
            res.status(200).json({});
        }
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
exports.getCouponRequests = function (req, res, next) {
    var sessionUserId = op.get(req, ['session', '_userId'], null);
    var queryUserId = op.get(req, ['query', '_userId'], null);
    new Promise(function (resolve, reject) {
        if (sessionUserId) {
            user_model_1.User.findById(sessionUserId)
                .then(function (user) {
                var _userId = user.admin && queryUserId ? queryUserId : sessionUserId;
                var conditions = {};
                if (queryUserId != 'all') {
                    conditions._id = _userId;
                }
                resolve(request_model_1.CouponRequest.find(conditions));
            });
        }
        else {
            resolve(request_model_1.CouponRequest.find({ _sessionId: req.session.id }));
        }
    }).then(function (query) {
        if ('discontinued' in req.query) {
            query.where('discontinued').equals(req.query.discontinued);
        }
        if ('purchased' in req.query) {
            query.where('purchased').equals(req.query.purchased);
        }
        query.select('_id');
        return query;
    })
        .then(function (itemsRequestDocs) {
        var page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        var limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        var itemsLimited = itemsRequestDocs.slice(limit * (page - 1), limit * (page - 1) + limit);
        var items = [];
        itemsLimited.forEach(function (item) {
            items.push(item._id);
        });
        var total = itemsRequestDocs.length;
        var pageTotal = itemsLimited.length;
        var totalPages = Math.round(total / limit);
        var res_body = {
            page: page,
            totalPages: totalPages,
            pageLimit: limit,
            total: total,
            totalBatch: pageTotal,
            items: items,
        };
        res.status(200).json(res_body);
    })
        .catch(function (error) {
        return next(error);
    });
};
exports.updateCouponRequest = function (req, res, next) {
    var sessionUserId = op.get(req, ['session', '_userId'], null);
    var bodyUserId = op.get(req, ['body', '_userId'], null);
    var changes = {};
    if ('body' in req) {
        var body = req.body;
        if (!('_id' in body)) {
            var error = new Error('missing _id');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('quantity' in body) {
            changes.quantity = body.quantity;
        }
        if ('discontinued' in body) {
            changes.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var conditions = {
        _id: req.body._id,
    };
    new Promise(function (resolve, reject) {
        if (sessionUserId) {
            user_model_1.User.findById(sessionUserId)
                .then(function (user) {
                if (user.admin && bodyUserId != null) {
                    conditions._userId = bodyUserId;
                }
                else {
                    conditions._userId = user._id;
                }
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        }
        else {
            conditions._sessionId = req.session.id;
            resolve();
        }
    })
        .then(function () {
        return request_model_1.CouponRequest.findOneAndUpdate(conditions, { $set: changes }, { new: true })
            .then(function (couponRequestDoc) {
            res.status(200).json(couponRequestDoc);
        });
    })
        .catch(function (error) {
        next(error);
    });
};
