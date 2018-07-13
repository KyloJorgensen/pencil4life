'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var connectMongo = require("connect-mongo");
var variables_express_1 = require("./variables.express");
var MongoStore = connectMongo(session);
var configExpress = function (app) {
    app
        // .use(function(req, res, next) {
        //     if (req.headers.host.split('.').length < 3) {
        //         res.redirect('https://' + 'www.' + req.headers.host + req.url);
        //     } else {
        //         if (req.secure) {
        //             next();
        //         } else {
        //             res.redirect('https://' + req.headers.host + req.url);
        //         }
        //     }
        // })
        .use(fileUpload())
        .use(bodyParser.json())
        .use(bodyParser.json({ type: 'application/json' }))
        .use(bodyParser.json({ type: 'application/csp-report' }))
        .use(bodyParser.urlencoded({ extended: false }))
        .use(cookieParser())
        .use(session({
        secret: variables_express_1.default.SESSION_SECRET,
        store: new MongoStore({
            mongooseConnection: mongoose_1.connection,
            collection: variables_express_1.default.SESSION_COLLECTION,
        }),
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: true,
            expires: new Date(Date.now() + 3600000 * 24 * 365),
            maxAge: 3600000 * 24 * 365
        }
    }));
};
exports.default = configExpress;
