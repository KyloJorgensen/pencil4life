'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_middleware_1 = require("../../user/user.middleware");
var coupon_controller_1 = require("./coupon.controller");
var request_router_1 = require("./request/request.router");
var router = express_1.Router();
router
    .use('/request', request_router_1.default)
    .post('/', user_middleware_1.adminAuth, coupon_controller_1.createCoupon)
    .put('/', user_middleware_1.adminAuth, coupon_controller_1.updateCoupon)
    .get('/', user_middleware_1.adminAuth, coupon_controller_1.getCoupons)
    .get('/:_couponCode', coupon_controller_1.getCoupon);
exports.default = router;
