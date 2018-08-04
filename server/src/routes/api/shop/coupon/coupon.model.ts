'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import { plugin as diffHistoryPlugin } from 'mongoose-diff-history/diffHistory'

export interface ICoupon {
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
    usable_with_sales?: boolean;
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
    created_by: string;
    updated_by: string;
    discontinued?: boolean;
}

export interface UpdateCoupon {
    code?: string;
    description?: string;
    itemIds?: [string];
    releaseDate?: Date;
    expiredDate?: Date;
    stock?: number;
    userIds?: [string];
    limit_per_user?: number;
    limit_per_sale?: number;
    usable_with_other_coupons?: boolean;
    usable_with_sales?: boolean;
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
    updated_by: string;
    discontinued?: boolean;
}

export interface ICouponModel extends ICoupon, Document {
}

const CouponSchema = new Schema({
    code: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    itemIds: {
        type: [Schema.Types.ObjectId],
        ref: 'Item',
        default: [],
    },
    releaseDate: {
        type: Date,
        default: new Date(),
    },
    expiredDate: {
        type: Date,
        default: new Date(),
    },
    stock: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 9999999,
    },
    userIds: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    limit_per_user: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 9999999,
    },
    limit_per_sale: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 9999999,
    },
    usable_with_other_coupons: {
        type: Boolean,
        default: false
    },
    usable_with_sales: {
        type: Boolean,
        default: false
    },
    sale: {
        type: Boolean,
        default: false
    },
    markdown: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    shipping_precent: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    shipping_price: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    discount_precent: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    discount_price: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    BOG_quantity: {
        type: Number,
        min: 0,
        default: 0,
    },
    BOG_quantity_free: {
        type: Number,
        min: 0,
        default: 0,
    },
    BOG_precent: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    BOG_price: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    created_by: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },
    updated_by: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false
    },
});

CouponSchema.plugin(diffHistoryPlugin);

export const Coupon: Model<ICouponModel> = model<ICouponModel>('Coupon', CouponSchema);

export default Coupon;