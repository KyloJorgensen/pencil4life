'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./user.controller.js'),
	authUser = require('./user.middleware.js').userAuth;

router.post('/', controller.createUser)
	.get('/', authUser, controller.getUser)
	.put('/', authUser, controller.updateUser)
	.post('/login', controller.login)
	.put('/login', authUser, controller.updateUserPassword)
	.all('/logout', controller.logout)

module.exports = router;