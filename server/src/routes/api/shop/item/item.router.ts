'use strict';

import { Router } from 'express';
import { adminAuth } from '../../user/user.middleware';
import { createItem, updateItem, getItems, getItem } from './item.controller';
import requestRouter from './request/request.router';
const router = Router();

router
	.use('/request', requestRouter)
	.post('/', adminAuth, createItem)
	.put('/', adminAuth, updateItem)
	.get('/', getItems)
	.get('/:_itemId', getItem)
    
export default router;