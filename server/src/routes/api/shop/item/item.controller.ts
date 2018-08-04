'use strict';

import { Item, IItem, UpdateItem } from './item.model';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../user/user.model';
import { Coupon } from '../coupon/coupon.model';

// Creates Item Item.
export const createItem = (req: Request, res: Response, next: NextFunction) => {
    let changes: IItem = {
        name: '',
        created_by: req.session._userId,
        updated_by: req.session._userId,
    };
    
    if ('body' in req) {
        const { body } = req;
        if ('name' in body) {
            changes.name = body.name;
        } else {
            var error = new Error('missing name');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('description' in body) {changes.description = body.description}
        if ('price' in body) {changes.price = body.price}
        if ('stock' in body) {changes.stock = body.stock}
        if ('tags' in body) {changes.tags = body.tags}
        if ('imageIds' in body) {changes.imageIds = body.imageIds}
        if ('couponable' in body) {changes.couponable = body.couponable}
        if ('taxable' in body) {changes.taxable = body.taxable}
        if ('releaseDate' in body) {changes.releaseDate = body.releaseDate}
        if ('expiredDate' in body) {changes.expiredDate = body.expiredDate}
        if ('created_by' in body) {changes.created_by = body.created_by}
        if ('updated_by' in body) {changes.updated_by = body.updated_by}
        if ('discontinued' in body) {changes.discontinued = body.discontinued}
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    let query = Item.create(changes);
    query.then((itemDoc) => {
        res.status(200).json({_id: itemDoc._id});    
    }).catch((error) => {
        console.log(error)
        next(error);
    });
};

// one get returns shops name
export const getItem = (req: Request, res: Response, next: NextFunction) => {
    let query = Item.findOne({_id: req.params._itemId});

    let adminfields = ['created_by', 'updated_by']
    if ('_userId' in req.session) {
        User.findById(req.session._userId, (error, user) => {
            if (user.admin) {adminfields = []}
        });
    }
    query.select(adminfields.map(field => `-${field}`).join(' '))
    query.then((itemDoc) => {
        if (itemDoc._id) {
            return Coupon.find({
                sale: true, 
                itemIds: itemDoc._id
            })
            .then((coupons) => {
                res.status(200).json({item: itemDoc, coupons: coupons });
            })
        } else {
            res.status(200).json({item: itemDoc});
        }
    }).catch((error) => {
        return next(error);
    });
};

// get list of shop items and returns them and a link for the next
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  
    let query = Item.find({});
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

// Update Item queries: _id update: name, price returns: new shop item 
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
    let changes: UpdateItem = {
        updated_by: req.session._userId
    };
    if ('body' in req) {
        const { body } = req;
        if (!('_id' in body)) {        
            var error = new Error('missing _id');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('name' in body) {changes.name = body.name}
        if ('description' in body) {changes.description = body.description}
        if ('price' in body) {changes.price = body.price}
        if ('stock' in body) {changes.stock = body.stock}
        if ('tags' in body) {changes.tags = body.tags}
        if ('imageIds' in body) {changes.imageIds = body.imageIds}
        if ('couponable' in body) {changes.couponable = body.couponable}
        if ('taxable' in body) {changes.taxable = body.taxable}
        if ('releaseDate' in body) {changes.releaseDate = body.releaseDate}
        if ('expiredDate' in body) {changes.expiredDate = body.expiredDate}
        if ('discontinued' in body) {changes.discontinued = body.discontinued}
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    let query = Item.findOneAndUpdate({_id: req.body._id}, {$set: changes}, {new: true});
    query.then((itemDoc) => {
        res.status(200).json(itemDoc);    
    }).catch((error) => {
        next(error);
    });
};