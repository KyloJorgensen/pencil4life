'use strict';

import { Router } from 'express';
import { createUser, getUser, updateUser, login, updateUserPassword, logout, forgotPassword, checkResetCode, resetPassword} from './user.controller';
import { userAuth } from './user.middleware';

const router = Router();

router
	.post('/', createUser)
	.get('/', userAuth, getUser)
	.put('/', userAuth, updateUser)
	.post('/login', login)
	.put('/login', userAuth, updateUserPassword)
	.all('/logout', logout)
	.post('/forgotpassword', forgotPassword)
	.get('/resetpassword/:userId/:reset_code', checkResetCode)
	.post('/resetpassword/:userId/:reset_code', resetPassword)

export default router;