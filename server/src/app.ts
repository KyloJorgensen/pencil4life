'use strict';

import * as express from 'express';
import './config/mongoose.connection';
import configExpress from './config/config.express';
import routesExpress from './config/routes.express';
import errorHandler from './utilities/errorHandler.middleware';

const app = express();

configExpress(app);
routesExpress(app);
errorHandler(app);

export default app;