'use strict';

import { Router } from 'express';
import { createContactMessage } from './contact.controller';

const router = Router();

router
	.post('/message', createContactMessage)

export default router;