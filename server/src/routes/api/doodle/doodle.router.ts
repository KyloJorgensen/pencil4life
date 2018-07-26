'use strict';

import { Router } from 'express';
import controller from './doodle.controller';
import { adminAuth } from '../user/user.middleware';

const router = Router();

router.post('/', adminAuth, controller.createDoodle)
	.put('/', adminAuth, controller.updateDoodle)
	.get('/', controller.getDoodles)
	.get('/:_doodleId', controller.getDoodle)

export default router;