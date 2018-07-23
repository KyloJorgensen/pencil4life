'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
var variables_express_1 = require("../config/variables.express");
// import { SMTPServer, SMTPServerOptions } from 'smtp-server';
// const options: SMTPServerOptions = {
//     onAuth(auth, session, callback){
//         if(auth.username !== 'kylo@pencil4life.com' || auth.password !== 'govp afmn mdof ryvg'){
//             return callback(new Error('Invalid username or password'), null);
//         }
//         callback(null, {user: 123}); // where 123 is the user id or similar property
//     }
// }
// const server = new SMTPServer(options);
// server.listen(587);
exports.sendEmail = function (username, password, mailOptions, callback) {
    // create reusable transporter object using the default SMTP transport
    var transport = {};
    transport.host = variables_express_1.NM_SMTP_ADDRESS;
    transport.port = Number(variables_express_1.NM_SMTP_PORT);
    transport.secure = false; // true for 465, false for other port
    transport.auth = {
        type: 'login',
        user: username,
        pass: password,
    };
    transport.tls = {};
    if (variables_express_1.NODE_ENV == 'development') {
        transport.tls.rejectUnauthorized = false;
        transport.debug = true;
        transport.logger = true;
    }
    var transporter = nodemailer_1.createTransport(transport);
    if (callback) {
        transporter.sendMail(mailOptions, callback);
    }
    else {
        return new Promise(function (resolve, reject) {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return reject(error);
                }
                resolve(info);
            });
        });
    }
};
