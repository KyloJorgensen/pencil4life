'use strict';

import { Router } from 'express';
import { adminAuth } from '../../user/user.middleware';
import { createCoupon, updateCoupon, getCoupons, getCoupon } from './coupon.controller';
import requestRouter from './request/request.router';
const router = Router();

router
	.use('/request', requestRouter)
	.post('/', adminAuth, createCoupon)
	.put('/', adminAuth, updateCoupon)
	.get('/', adminAuth, getCoupons)
	.get('/:_couponCode', getCoupon)
    
export default router;