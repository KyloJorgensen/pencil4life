'use strict';

import { Router } from 'express';
import controller from './main.controller';

const router = Router();

router.get('/', controller.getRoot)

export default router;