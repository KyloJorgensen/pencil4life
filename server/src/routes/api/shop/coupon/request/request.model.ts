'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import { plugin as diffHistoryPlugin } from 'mongoose-diff-history/diffHistory'

export interface ICouponRequest {
    _couponId: string;
    quantity: number;
    _userId?: string;
    _sessionId?: string;
    requestDate: Date;
    purchased?: boolean;
    discontinued?: boolean;
}

export interface UpdateCouponRequest {
    quantity?: number;
    requestDate?: Date;
    purchased?: boolean;
    discontinued?: boolean;
}

export interface ICouponRequestModel extends ICouponRequest, Document {
}

const CouponRequestSchema = new Schema({
    _couponId: {
        type: Schema.Types.ObjectId,
        ref: 'Coupon',
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

CouponRequestSchema.plugin(diffHistoryPlugin);

export const CouponRequest: Model<ICouponRequestModel> = model<ICouponRequestModel>('CouponRequest', CouponRequestSchema);

export default CouponRequest;