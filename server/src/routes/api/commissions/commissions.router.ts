'use strict';

import { Router } from 'express';
import { createCommissionRequest } from './commissions.controller';

const router = Router();

router
	.post('/', createCommissionRequest)

export default router;