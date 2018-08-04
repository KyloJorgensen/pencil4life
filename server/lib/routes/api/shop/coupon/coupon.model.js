'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var diffHistory_1 = require("mongoose-diff-history/diffHistory");
var CouponSchema = new mongoose_1.Schema({
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
        type: [mongoose_1.Schema.Types.ObjectId],
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
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
        default: 9999999,
    },
    userIds: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    limit_per_user: {
        type: Number,
        min: 0,
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
        default: 9999999,
    },
    limit_per_sale: {
        type: Number,
        min: 0,
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
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
        get: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        set: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
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
        get: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        set: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
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
        get: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        set: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
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
        get: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        set: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        default: 0,
    },
    created_by: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },
    updated_by: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false
    },
});
CouponSchema.plugin(diffHistory_1.plugin);
exports.Coupon = mongoose_1.model('Coupon', CouponSchema);
exports.default = exports.Coupon;
