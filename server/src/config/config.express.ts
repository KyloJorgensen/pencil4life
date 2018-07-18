'use strict';

import * as express from 'express';
import { connection as mongooseConnection } from 'mongoose';
import * as fileUpload from 'express-fileupload';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as connectMongo from 'connect-mongo';
import config from './variables.express';

const MongoStore = connectMongo(session);

const configExpress = (app) => {
    app
    .use(function(req, res, next) {
        if (req.headers.host.split('.').length < 3) {
            res.redirect('https://' + 'www.' + req.headers.host + req.url);
        } else {
            if (req.secure) {
                next();
            } else {
                res.redirect('https://' + req.headers.host + req.url);
            }
        }
    })
    .use(fileUpload())
    .use(bodyParser.json())
    .use(bodyParser.json({type: 'application/json'}))
    .use(bodyParser.json({type: 'application/csp-report'}))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(session({
        secret: config.SESSION_SECRET,
        store: new MongoStore({
            mongooseConnection: mongooseConnection,
            collection: config.SESSION_COLLECTION,
        }),
        resave: false,
        saveUninitialized: true,
        cookie: { 
            // secure: true,
            expires: new Date(Date.now() + 3600000*24*365),
            maxAge: 3600000*24*365
        }
    }))
}

export default configExpress;

// module.exports = function(app) {
//     app
//         // .use(function(req, res, next) {
//         //     let url = req.headers.host.split('.');
//         //     if (url[url.length-1] != "com") {
//         //         res.status(401).end();
//         //     }
//         //     if (url[url.length-2] == 'pencil4life') {
//         //         next();
//         //     } else if (url[url.length-2] == 'bradashworth') {
//         //         // return next();
//         //         let newurl = url;
//         //         newurl[url.length-2] = 'pencil4life';
//         //         res.redirect('https://' + newurl.join('.') + req.url);
//         //     } else {
//         //         res.status(401).end();
//         //     }
//         // })
//         // .use(function(req, res, next) {
//         //     if (req.headers.host.split('.').length < 3) {
//         //         res.redirect('https://' + 'www.' + req.headers.host + req.url);
//         //     } else {
//         //         if (req.secure) {
//         //             next();
//         //         } else {
//         //             res.redirect('https://' + req.headers.host + req.url);
//         //         }
//         //     }
//         // })
// };