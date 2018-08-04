'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import { plugin as diffHistoryPlugin } from 'mongoose-diff-history/diffHistory'

export interface IItem {
    name: string;
    description?: string;
    price?: number;
    stock?: number;
    tags?: string[];
    imageIds?: string[];
    commission?: string;
    couponable?: boolean;
    taxable?: boolean;
    releaseDate?: Date;
    expiredDate?: Date;
    created_by: string;
    updated_by: string;
    discontinued?: boolean;
}

export interface UpdateItem {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    tags?: string[];
    imageIds?: string[];
    commission?: string;
    couponable?: boolean;
    taxable?: boolean;
    releaseDate?: Date;
    expiredDate?: Date;
    updated_by: string;
    discontinued?: boolean;
}

export interface IItemModel extends IItem, Document {
}

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    stock: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    imageIds: {
        type: [Schema.Types.ObjectId],
        ref: 'Image',
        default: [],
    },
    commission: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    couponable: {
        type: Boolean,
        default: true,
    },
    taxable: {
        type: Boolean,
        default: true,
    },
    releaseDate: {
        type: Date,
    },
    expiredDate: {
        type: Date,
    },
    created_by: {
        type: String,
        required: true,
    },
    updated_by: {
        type: String,
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false
    },
});

ItemSchema.plugin(diffHistoryPlugin);

export const Item: Model<IItemModel> = model<IItemModel>('Item', ItemSchema);

export default Item;