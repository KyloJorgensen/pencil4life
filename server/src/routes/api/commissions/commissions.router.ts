'use strict';

import { Router } from 'express';
import { createCommissionRequest, commissionsAloud, updateCommissionToggle, getCommissionsToggle } from './commissions.controller';
import { adminAuth } from '../user/user.middleware'

const router = Router();

router
	.get('/', commissionsAloud)
	.post('/', createCommissionRequest)
	.get('/toggle', getCommissionsToggle)
	.put('/toggle', adminAuth, updateCommissionToggle)

export default router;