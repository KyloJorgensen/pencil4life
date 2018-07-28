'use strict';

import { Router } from 'express';
import checkoutRouter from './checkout/checkout.router';
import eventRouter from './event/event.router';
import projectRouter from './project/project.router';
import imageRouter from './image/image.router';
import newsitemRouter from './newsitem/newsitem.router';
import shopitemRouter from './shopitem/shopitem.router';
import userRouter from './user/user.router';
import commissionsRouter from './commissions/commissions.router';
import contactRouter from './contact/contact.router';
import doodleRouter from './doodle/doodle.router';

const router = Router();

router
    // .use('/checkout', checkoutRouter)
    .use('/event', eventRouter)
    .use('/project', projectRouter)
    .use('/image', imageRouter)
    .use('/newsitem', newsitemRouter)
    .use('/shopitem', shopitemRouter)
    .use('/user', userRouter)
    .use('/commissions', commissionsRouter)
    .use('/contact', contactRouter)
    .use('/doodle', doodleRouter)

export default router;