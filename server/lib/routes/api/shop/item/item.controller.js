'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var item_model_1 = require("./item.model");
var user_model_1 = require("../../user/user.model");
var coupon_model_1 = require("../coupon/coupon.model");
// Creates Item Item.
exports.createItem = function (req, res, next) {
    var changes = {
        name: '',
        created_by: req.session._userId,
        updated_by: req.session._userId,
    };
    if ('body' in req) {
        var body = req.body;
        if ('name' in body) {
            changes.name = body.name;
        }
        else {
            var error = new Error('missing name');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('description' in body) {
            changes.description = body.description;
        }
        if ('price' in body) {
            changes.price = body.price;
        }
        if ('stock' in body) {
            changes.stock = body.stock;
        }
        if ('tags' in body) {
            changes.tags = body.tags;
        }
        if ('imageIds' in body) {
            changes.imageIds = body.imageIds;
        }
        if ('couponable' in body) {
            changes.couponable = body.couponable;
        }
        if ('taxable' in body) {
            changes.taxable = body.taxable;
        }
        if ('releaseDate' in body) {
            changes.releaseDate = body.releaseDate;
        }
        if ('expiredDate' in body) {
            changes.expiredDate = body.expiredDate;
        }
        if ('created_by' in body) {
            changes.created_by = body.created_by;
        }
        if ('updated_by' in body) {
            changes.updated_by = body.updated_by;
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
    var query = item_model_1.Item.create(changes);
    query.then(function (itemDoc) {
        res.status(200).json({ _id: itemDoc._id });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns shops name
exports.getItem = function (req, res, next) {
    var query = item_model_1.Item.findOne({ _id: req.params._itemId });
    var adminfields = ['created_by', 'updated_by'];
    if ('_userId' in req.session) {
        user_model_1.User.findById(req.session._userId, function (error, user) {
            if (user.admin) {
                adminfields = [];
            }
        });
    }
    query.select(adminfields.map(function (field) { return "-" + field; }).join(' '));
    query.then(function (itemDoc) {
        if (itemDoc._id) {
            return coupon_model_1.Coupon.find({
                sale: true,
                itemIds: itemDoc._id
            })
                .then(function (coupons) {
                res.status(200).json({ item: itemDoc, coupons: coupons });
            });
        }
        else {
            res.status(200).json({ item: itemDoc });
        }
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
exports.getItems = function (req, res, next) {
    var query = item_model_1.Item.find({});
    if ('discontinued' in req.query) {
        query.where('discontinued').equals(req.query.discontinued);
    }
    query.select('_id');
    query.then(function (itemsDocs) {
        var page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        var limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        var itemsLimited = itemsDocs.slice(limit * (page - 1), limit * (page - 1) + limit);
        var items = [];
        itemsLimited.forEach(function (item) {
            items.push(item._id);
        });
        var total = itemsDocs.length;
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
    }).catch(function (error) {
        return next(error);
    });
};
// Update Item queries: _id update: name, price returns: new shop item 
exports.updateItem = function (req, res, next) {
    var changes = {
        updated_by: req.session._userId
    };
    if ('body' in req) {
        var body = req.body;
        if (!('_id' in body)) {
            var error = new Error('missing _id');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('name' in body) {
            changes.name = body.name;
        }
        if ('description' in body) {
            changes.description = body.description;
        }
        if ('price' in body) {
            changes.price = body.price;
        }
        if ('stock' in body) {
            changes.stock = body.stock;
        }
        if ('tags' in body) {
            changes.tags = body.tags;
        }
        if ('imageIds' in body) {
            changes.imageIds = body.imageIds;
        }
        if ('couponable' in body) {
            changes.couponable = body.couponable;
        }
        if ('taxable' in body) {
            changes.taxable = body.taxable;
        }
        if ('releaseDate' in body) {
            changes.releaseDate = body.releaseDate;
        }
        if ('expiredDate' in body) {
            changes.expiredDate = body.expiredDate;
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
    var query = item_model_1.Item.findOneAndUpdate({ _id: req.body._id }, { $set: changes }, { new: true });
    query.then(function (itemDoc) {
        res.status(200).json(itemDoc);
    }).catch(function (error) {
        next(error);
    });
};
