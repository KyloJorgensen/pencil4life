'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var coupon_model_1 = require("./coupon.model");
var user_model_1 = require("../../user/user.model");
// Creates Coupon Coupon.
exports.createCoupon = function (req, res, next) {
    var changes = {
        code: '',
        created_by: req.session._userId,
        updated_by: req.session._userId,
    };
    if ('body' in req) {
        var body = req.body;
        if ('code' in body) {
            changes.code = body.code;
        }
        else {
            var error = new Error('missing code');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('description' in body) {
            changes.description = body.description;
        }
        if ('itemIds' in body) {
            changes.itemIds = body.itemIds;
        }
        if ('releaseDate' in body) {
            changes.releaseDate = body.releaseDate;
        }
        if ('expiredDate' in body) {
            changes.expiredDate = body.expiredDate;
        }
        if ('stock' in body) {
            changes.stock = body.stock;
        }
        if ('userIds' in body) {
            changes.userIds = body.userIds;
        }
        if ('limit_per_user' in body) {
            changes.limit_per_user = body.limit_per_user;
        }
        if ('limit_per_sale' in body) {
            changes.limit_per_sale = body.limit_per_sale;
        }
        if ('usable_with_other_coupons' in body) {
            changes.usable_with_other_coupons = body.usable_with_other_coupons;
        }
        if ('sale' in body) {
            changes.sale = body.sale;
        }
        if ('shipping_precent' in body) {
            changes.shipping_precent = body.shipping_precent;
        }
        else if ('shipping_price' in body) {
            changes.shipping_price = body.shipping_price;
        }
        if ('markdown' in body) {
            changes.markdown = body.markdown;
        }
        else if ('discount_precent' in body) {
            changes.discount_precent = body.discount_precent;
        }
        else if ('discount_price' in body) {
            changes.discount_price = body.discount_price;
        }
        else if ('BOG_precent' in body) {
            changes.BOG_precent = body.BOG_precent;
        }
        else if ('BOG_price' in body) {
            changes.BOG_price = body.BOG_price;
        }
        if ('BOG_quantity' in body) {
            changes.BOG_quantity = body.BOG_quantity;
        }
        if ('BOG_quantity_free' in body) {
            changes.BOG_quantity_free = body.BOG_quantity_free;
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
    var query = coupon_model_1.Coupon.create(changes);
    query.then(function (couponDoc) {
        res.status(200).json({ _id: couponDoc._id });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns shops name
exports.getCoupon = function (req, res, next) {
    var query = coupon_model_1.Coupon.findOne({ code: req.params._couponCode });
    var adminfields = ['created_by', 'updated_by'];
    if ('_userId' in req.session) {
        user_model_1.User.findById(req.session._userId, function (error, user) {
            if (user.admin) {
                adminfields = [];
            }
        });
    }
    query.select(adminfields.map(function (field) { return "-" + field; }).join(' '));
    query.then(function (couponDoc) {
        res.status(200).json(couponDoc);
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
exports.getCoupons = function (req, res, next) {
    var query = coupon_model_1.Coupon.find({});
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
// Update Coupon queries: _id update: name, price returns: new shop item 
exports.updateCoupon = function (req, res, next) {
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
        if ('code' in body) {
            changes.code = body.code;
        }
        if ('description' in body) {
            changes.description = body.description;
        }
        if ('itemIds' in body) {
            changes.itemIds = body.itemIds;
        }
        if ('releaseDate' in body) {
            changes.releaseDate = body.releaseDate;
        }
        if ('expiredDate' in body) {
            changes.expiredDate = body.expiredDate;
        }
        if ('stock' in body) {
            changes.stock = body.stock;
        }
        if ('userIds' in body) {
            changes.userIds = body.userIds;
        }
        if ('limit_per_user' in body) {
            changes.limit_per_user = body.limit_per_user;
        }
        if ('limit_per_sale' in body) {
            changes.limit_per_sale = body.limit_per_sale;
        }
        if ('usable_with_other_coupons' in body) {
            changes.usable_with_other_coupons = body.usable_with_other_coupons;
        }
        if ('sale' in body) {
            changes.sale = body.sale;
        }
        if ('shipping_precent' in body) {
            changes.shipping_precent = body.shipping_precent;
            changes.shipping_price = 0;
        }
        else if ('shipping_price' in body) {
            changes.shipping_precent = 0;
            changes.shipping_price = body.shipping_price;
        }
        var zeroMoneyItems = function (chagnes) {
            changes.markdown = 0;
            changes.discount_precent = 0;
            changes.discount_price = 0;
            changes.BOG_precent = 0;
            changes.BOG_price = 0;
            return chagnes;
        };
        if ('markdown' in body) {
            changes = zeroMoneyItems(changes);
            changes.markdown = body.markdown;
        }
        else if ('discount_precent' in body) {
            changes = zeroMoneyItems(changes);
            changes.discount_precent = body.discount_precent;
        }
        else if ('discount_price' in body) {
            changes = zeroMoneyItems(changes);
            changes.discount_price = body.discount_price;
        }
        else if ('BOG_precent' in body) {
            changes = zeroMoneyItems(changes);
            changes.BOG_precent = body.BOG_precent;
        }
        else if ('BOG_price' in body) {
            changes = zeroMoneyItems(changes);
            changes.BOG_price = body.BOG_price;
        }
        if ('BOG_quantity' in body) {
            changes.BOG_quantity = body.BOG_quantity;
        }
        if ('BOG_quantity_free' in body) {
            changes.BOG_quantity_free = body.BOG_quantity_free;
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
    var query = coupon_model_1.Coupon.findOneAndUpdate({ _id: req.body._id }, { $set: changes }, { new: true });
    query.then(function (couponDoc) {
        res.status(200).json(couponDoc);
    }).catch(function (error) {
        next(error);
    });
};
