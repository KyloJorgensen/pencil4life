'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./project.controller.js');
const authAdmin = require('../user/user.middleware.js').adminAuth;

router.post('/', authAdmin, controller.createProject)
	.put('/', authAdmin, controller.updateProject)
	.get('/', controller.getProjects)
	.get('/:_projectId', controller.getProject)
	.post('/:_projectId/page/', authAdmin, controller.createProjectPage)
	.put('/:_projectId/page/:_pageId', authAdmin, controller.updateProjectPage)
	.get('/:_projectId/page/', controller.getProjectPages)
	.get('/:_projectId/page/:_pageId', controller.getProjectPage)

module.exports = router;
