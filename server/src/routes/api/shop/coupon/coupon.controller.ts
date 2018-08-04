'use strict';

import { Coupon, ICoupon, UpdateCoupon } from './coupon.model';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../user/user.model';

export interface CouponSession extends Express.Session {
    _userId?: string;
}

export interface CouponReq extends Request {
    session: CouponSession;
}

export interface CreateCouponReqBody {
    code: string;
    description?: string;
    itemIds?: [string];
    releaseDate?: Date;
    expiredDate?: Date;
    stock?: number;
    userIds?: [string];
    limit_per_user?: number;
    limit_per_sale?: number;
    usable_with_other_coupons?: boolean;
    sale?: boolean;
    markdown?: number;
    shipping_precent?: number;
    shipping_price?: number;
    discount_precent?: number;
    discount_price?: number;
    BOG_quantity?: number;
    BOG_quantity_free?: number;
    BOG_precent?: number;
    BOG_price?: number;
    discontinued?: boolean;
}

export interface CreateCouponReq extends CouponReq {
    body: CreateCouponReqBody;
}

// Creates Coupon Coupon.
export const createCoupon = (req: CreateCouponReq, res: Response, next: NextFunction) => {
    let changes: ICoupon = {
        code: '',
        created_by: req.session._userId,
        updated_by: req.session._userId,
    };
    
    if ('body' in req) {
        const { body } = req;
        if ('code' in body) {
            changes.code = body.code;
        } else {
            var error = new Error('missing code');
            error.name = 'BadRequestError'
            return next(error);
        }

        if ('description' in body) {changes.description = body.description}
        if ('itemIds' in body) {changes.itemIds = body.itemIds}
        if ('releaseDate' in body) {changes.releaseDate = body.releaseDate}
        if ('expiredDate' in body) {changes.expiredDate = body.expiredDate}
        if ('stock' in body) {changes.stock = body.stock}
        if ('userIds' in body) {changes.userIds = body.userIds}
        if ('limit_per_user' in body) {changes.limit_per_user = body.limit_per_user}
        if ('limit_per_sale' in body) {changes.limit_per_sale = body.limit_per_sale}
        if ('usable_with_other_coupons' in body) {changes.usable_with_other_coupons = body.usable_with_other_coupons}
        if ('sale' in body) {changes.sale = body.sale}

        if ('shipping_precent' in body) {changes.shipping_precent = body.shipping_precent}
        else if ('shipping_price' in body) {changes.shipping_price = body.shipping_price}

        if ('markdown' in body) {changes.markdown = body.markdown} 
        else if ('discount_precent' in body) {changes.discount_precent = body.discount_precent}
        else if ('discount_price' in body) {changes.discount_price = body.discount_price}
        else if ('BOG_precent' in body) {changes.BOG_precent = body.BOG_precent}
        else if ('BOG_price' in body) {changes.BOG_price = body.BOG_price}
        
        if ('BOG_quantity' in body) {changes.BOG_quantity = body.BOG_quantity}
        if ('BOG_quantity_free' in body) {changes.BOG_quantity_free = body.BOG_quantity_free}
        if ('discontinued' in body) {changes.discontinued = body.discontinued}

    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    let query = Coupon.create(changes);
    query.then((couponDoc) => {
        res.status(200).json({_id: couponDoc._id});    
    }).catch((error) => {
        console.log(error)
        next(error);
    });
};


export interface getCouponReqParams {
    _couponCode
}

export interface getCouponReq extends CouponReq {
    params: getCouponReqParams;
}

// one get returns shops name
export const getCoupon = (req: getCouponReq, res: Response, next: NextFunction) => {
    let query = Coupon.findOne({code: req.params._couponCode});

    let adminfields = ['created_by', 'updated_by']
    if ('_userId' in req.session) {
        User.findById(req.session._userId, (error, user) => {
            if (user.admin) {adminfields = []}
        });
    }
    query.select(adminfields.map(field => `-${field}`).join(' '))
    query.then((couponDoc) => {
        res.status(200).json(couponDoc);
    }).catch((error) => {
        return next(error);
    });
};

// get list of shop items and returns them and a link for the next
export const getCoupons = (req: Request, res: Response, next: NextFunction) => {
    let query = Coupon.find({});
    if ('discontinued' in req.query) {
        query.where('discontinued').equals(req.query.discontinued);
    }
    query.select('_id');
    query.then((itemsDocs) => {
        let page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        let limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        let itemsLimited = itemsDocs.slice(limit*(page-1), limit*(page-1)+limit);
        let items = []; 
        itemsLimited.forEach((item) => {
            items.push(item._id);
        })
        let total = itemsDocs.length;
        let pageTotal = itemsLimited.length;
        let totalPages = Math.round(total/limit);
        let res_body = {
            page: page,
            totalPages: totalPages,
            pageLimit: limit,
            total: total,
            totalBatch: pageTotal,
            items: items,
        };
        res.status(200).json(res_body);
    }).catch((error) => {
        return next(error);
    });
};

// Update Coupon queries: _id update: name, price returns: new shop item 
export const updateCoupon = (req: Request, res: Response, next: NextFunction) => {
    let changes: UpdateCoupon = {
        updated_by: req.session._userId
    };
    if ('body' in req) {
        const { body } = req;
        if (!('_id' in body)) {        
            var error = new Error('missing _id');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('code' in body) {changes.code = body.code}
        if ('description' in body) {changes.description = body.description}
        if ('itemIds' in body) {changes.itemIds = body.itemIds}
        if ('releaseDate' in body) {changes.releaseDate = body.releaseDate}
        if ('expiredDate' in body) {changes.expiredDate = body.expiredDate}
        if ('stock' in body) {changes.stock = body.stock}
        if ('userIds' in body) {changes.userIds = body.userIds}
        if ('limit_per_user' in body) {changes.limit_per_user = body.limit_per_user}
        if ('limit_per_sale' in body) {changes.limit_per_sale = body.limit_per_sale}
        if ('usable_with_other_coupons' in body) {changes.usable_with_other_coupons = body.usable_with_other_coupons}
        if ('sale' in body) {changes.sale = body.sale}

        if ('shipping_precent' in body) {
            changes.shipping_precent = body.shipping_precent;
            changes.shipping_price = 0;
        }
        else if ('shipping_price' in body) {
            changes.shipping_precent = 0;
            changes.shipping_price = body.shipping_price;
        }

        var zeroMoneyItems = (chagnes: UpdateCoupon) => {
            changes.markdown = 0;
            changes.discount_precent = 0;
            changes.discount_price = 0;
            changes.BOG_precent = 0;
            changes.BOG_price = 0;
            return chagnes;
        }
        if ('markdown' in body) {
            changes = zeroMoneyItems(changes);
            changes.markdown = body.markdown;
        } else if ('discount_precent' in body) {
            changes = zeroMoneyItems(changes);
            changes.discount_precent = body.discount_precent;
        } else if ('discount_price' in body) {
            changes = zeroMoneyItems(changes);
            changes.discount_price = body.discount_price;
        } else if ('BOG_precent' in body) {
            changes = zeroMoneyItems(changes);
            changes.BOG_precent = body.BOG_precent;
        } else if ('BOG_price' in body) {
            changes = zeroMoneyItems(changes);
            changes.BOG_price = body.BOG_price;
        }
        
        if ('BOG_quantity' in body) {changes.BOG_quantity = body.BOG_quantity}
        if ('BOG_quantity_free' in body) {changes.BOG_quantity_free = body.BOG_quantity_free}
        if ('discontinued' in body) {changes.discontinued = body.discontinued}
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    let query = Coupon.findOneAndUpdate({_id: req.body._id}, {$set: changes}, {new: true});
    query.then((couponDoc) => {
        res.status(200).json(couponDoc);    
    }).catch((error) => {
        next(error);
    });
};