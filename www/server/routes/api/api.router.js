'use strict';

var express = require('express'),
    router = express.Router(),
    checkoutRouter = require('./checkout/checkout.router.js'),
    eventRouter = require('./event/event.router.js'),
    projectRouter = require('./project/project.router.js'),
    imageRouter = require('./image/image.router.js'),
    newsitemRouter = require('./newsitem/newsitem.router.js'),
    shopitemRouter = require('./shopitem/shopitem.router.js'),
    userRouter = require('./user/user.router.js');

router.use('/checkout', checkoutRouter)
    .use('/event', eventRouter)
    .use('/project', projectRouter)
    .use('/image', imageRouter)
    .use('/newsitem', newsitemRouter)
    .use('/shopitem', shopitemRouter)
    .use('/user', userRouter)

module.exports = router;