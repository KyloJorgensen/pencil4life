'use strict';

import { Router } from 'express';
import CouponRouter from './coupon/coupon.router';
import ItemRouter from './item/item.router';
const router = Router();

router
// .use('/coupon', CouponRouter)
// .use('/item', ItemRouter)

export default router;