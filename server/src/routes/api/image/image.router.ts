'use strict';

import { Router } from 'express';
import controller from './image.controller';
import { adminAuth } from '../user/user.middleware';

const router = Router();

router.post('/', adminAuth, controller.createImage)
	.put('/', adminAuth, controller.updateImage)
	.get('/', controller.getImages)
	.get('/:_imageId', controller.getImage)

export default router;