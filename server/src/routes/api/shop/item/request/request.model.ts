'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import { plugin as diffHistoryPlugin } from 'mongoose-diff-history/diffHistory'

export interface IItemRequest {
    _itemId: string;
    quantity: number;
    _userId?: string;
    _sessionId?: string;
    requestDate: Date;
    purchased?: boolean;
    discontinued?: boolean;
}

export interface UpdateItemRequest {
    quantity?: number;
    requestDate?: Date;
    purchased?: boolean;
    discontinued?: boolean;
}

export interface IItemRequestModel extends IItemRequest, Document {
}

const ItemRequestSchema = new Schema({
    _itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: true,
    },
    _userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    _sessionId: {
        type: Schema.Types.ObjectId,
        ref: 'Session',
    },
    requestDate: {
        type: Date,
        required: true,
    },
    purchased: {
        type: Boolean,
        default: false,
    },
    discontinued: {
        type: Boolean,
        default: false,
    },
});

ItemRequestSchema.plugin(diffHistoryPlugin);

export const ItemRequest: Model<IItemRequestModel> = model<IItemRequestModel>('ItemRequest', ItemRequestSchema);

export default ItemRequest;