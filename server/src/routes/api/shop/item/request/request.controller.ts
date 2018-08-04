'use strict';

import { ItemRequest, IItemRequest, UpdateItemRequest, IItemRequestModel } from './request.model';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../../user/user.model';
import { DocumentQuery } from 'mongoose';
import * as op from 'object-path';

export interface ItemRequestSession extends Express.Session {
    _userId?: string;
}

export interface ItemRequestReq extends Request {
    session: ItemRequestSession;
}

export interface CreateItemRequestBody {
    _itemId: string;
    quantity: number;
}

export interface CreateItemRequest extends ItemRequestReq {
    body: CreateItemRequestBody;
}

// Creates ItemRequest.
export const createItemRequest = (req: CreateItemRequest, res: Response, next: NextFunction) => {
    let changes: IItemRequest = {
        _itemId: '',
        quantity: 0,
        requestDate: new Date(),
    };
    changes.requestDate.setHours(changes.requestDate.getHours() + 1);
    if ('_userId' in req.session) {
        changes._userId = req.session._userId;
    } else {
        changes._sessionId = req.session.id;
    }

    if ('body' in req) {
        const { body } = req;
        if ('_itemId' in body) {changes._itemId = body._itemId} else {
            var error = new Error('missing _itemId');
            error.name = 'BadRequestError'
            return next(error);
        }
        if ('quantity' in body) {changes.quantity = body.quantity} else {
            var error = new Error('missing quantity');
            error.name = 'BadRequestError'
            return next(error);
        }
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }

    let query = ItemRequest.create(changes);
    query.then((itemDoc) => {
        res.status(200).json({_id: itemDoc._id});    
    }).catch((error) => {
        console.log(error)
        next(error);
    });
};

export interface getItemRequestParams {
    _itemRequestId: string;
}

export interface getItemRequest extends ItemRequestReq {
    params: getItemRequestParams;
}

// one get returns shops name
export const getItemRequest = (req: getItemRequest, res: Response, next: NextFunction) => {
    let query: DocumentQuery<IItemRequestModel, IItemRequestModel>;
    let adminfields = [];
    const sessionUserId = op.get(req, ['session', '_userId'], false);

    if (sessionUserId) {
        User.findOne({_id: req.params._itemRequestId}, (error, user) => {
            const conditions: {
                _id: string;
                _userId?: string; 
            } = {
                _id: req.params._itemRequestId
            };

            if (user.admin) {
                adminfields = [];
            } else {
                conditions._userId = req.session._userId
            }
            query = ItemRequest.findOne(conditions);
        });
    } else {
        query = ItemRequest.findOne({_id: req.params._itemRequestId, _sessionId: req.session.id});
    }

    query.select(adminfields.map(field => `-${field}`).join(' '))
    query.then((itemRequestDoc) => {
        if (itemRequestDoc) {
            res.status(200).json(itemRequestDoc);
        } else {
            res.status(200).json({});
        }
    }).catch((error) => {
        return next(error);
    });
};

export interface getItemsRequestQuery {
    _userId?: string;
    purchased?: boolean;
    discontinued?: boolean;
    page?: number;
    limit?: number;
}

export interface getItemsRequest extends ItemRequestReq {
    query: getItemsRequestQuery
}

// get list of shop items and returns them and a link for the next
export const getItemRequests = (req: getItemsRequest, res: Response, next: NextFunction) => {
    const sessionUserId: string = op.get(req, ['session', '_userId'], null);
    const queryUserId: string = op.get(req, ['query', '_userId'], null);
    new Promise<DocumentQuery<IItemRequestModel[], IItemRequestModel>>((resolve, reject) => {
        if (sessionUserId) {
            User.findById(sessionUserId)
            .then((user) => {
                const _userId = user.admin && queryUserId ? queryUserId : sessionUserId;
                const conditions: {
                    _id?: string
                } = {}
                if (queryUserId != 'all') {
                    conditions._id = _userId;
                }
                resolve(ItemRequest.find(conditions));
            })
        } else {
            resolve(ItemRequest.find({_sessionId: req.session.id}));
        }
    }).then((query) => {
        if ('discontinued' in req.query) {
            query.where('discontinued').equals(req.query.discontinued);
        }
        if ('purchased' in req.query) {
            query.where('purchased').equals(req.query.purchased);
        }
        query.select('_id');
        return query
    })
    .then((itemsRequestDocs) => {
        let page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        let limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        let itemsLimited = itemsRequestDocs.slice(limit*(page-1), limit*(page-1)+limit);
        let items = []; 
        itemsLimited.forEach((item) => {
            items.push(item._id);
        })
        let total = itemsRequestDocs.length;
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
    })    
    .catch((error) => {
        return next(error);
    });
};

export interface updateItemRequestBody {
    _id: string;
    quantity?: number;
    discontinued?: boolean;
    _userId?: string;
}

export interface updateItemRequest extends ItemRequestReq {
    body: updateItemRequestBody
}

export const updateItemRequest = (req: updateItemRequest, res: Response, next: NextFunction) => {
    const sessionUserId: string = op.get(req, ['session', '_userId'], null);
    const bodyUserId: string = op.get(req, ['body', '_userId'], null);

    const changes: UpdateItemRequest = {};
    if ('body' in req) {
        const { body } = req;
        if (!('_id' in body)) {        
            var error = new Error('missing _id');
            error.name = 'BadRequestError'
            return next(error);
        }

        if ('quantity' in body) {changes.quantity = body.quantity}
        if ('discontinued' in body) {changes.discontinued = body.discontinued}
    } else {
        var error = new Error('missing body');
        error.name = 'BadRequestError'
        return next(error);
    }
    const conditions: {
        _id: string;
        _userId?: string;
        _sessionId?: string;
    }= {
        _id: req.body._id,
    }

    new Promise((resolve, reject) => {
        if (sessionUserId) {
            User.findById(sessionUserId)
            .then((user) => {
                if (user.admin && bodyUserId != null) {
                    conditions._userId = bodyUserId;
                } else {
                    conditions._userId = user._id;
                }
                resolve();
            }).catch((error) => {
                reject(error);
            })
        } else {
            conditions._sessionId = req.session.id;
            resolve();
        }
    })
    .then(() => {
        return ItemRequest.findOneAndUpdate(conditions, {$set: changes}, {new: true})
        .then((itemDoc) => {
            res.status(200).json(itemDoc);    
        })
    })
    .catch((error) => {
        next(error);
    });

};