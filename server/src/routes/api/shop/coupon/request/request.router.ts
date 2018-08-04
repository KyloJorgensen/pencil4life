'use strict';

import { Router } from 'express';
import { createCouponRequest, updateCouponRequest, getCouponRequests, getCouponRequest } from './request.controller';
const router = Router();

router
	.post('/', createCouponRequest)
	.put('/', updateCouponRequest)
	.get('/', getCouponRequests)
    .get('/:_itemId', getCouponRequest)
    
export default router;