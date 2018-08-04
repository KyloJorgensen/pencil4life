'use strict';

import { Router } from 'express';
import { createItemRequest, updateItemRequest, getItemRequests, getItemRequest } from './request.controller';
const router = Router();

router
	.post('/', createItemRequest)
	.put('/', updateItemRequest)
	.get('/', getItemRequests)
    .get('/:_itemId', getItemRequest)
    
export default router;