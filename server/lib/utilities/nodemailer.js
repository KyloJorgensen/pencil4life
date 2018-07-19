'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
var variables_express_1 = require("../config/variables.express");
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
    transport.tls.rejectUnauthorized = false;
    transport.debug = true;
    transport.logger = true;
    var transporter = nodemailer_1.createTransport(transport);
    // // setup email data with unicode symbols
    // let mailOptions: SendMailOptions = {};
    // mailOptions.from = '"Fred Foo 👻" <foo@example.com>', // sender address
    // mailOptions.to = to, // list of receivers
    // mailOptions.subject = 'Hello ✔', // Subject line
    // mailOptions.text = 'Hello world?', // plain text body
    // mailOptions.html = '<b>Hello world?</b>' // html body
    // send mail with defined transport object
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
exports.sendEmail('testuser', 'secretpass', {
    from: {
        name: 'testuser',
        address: 'testuser@pencil4life.com'
    },
    to: {
        name: 'Kylo',
        address: 'kylo@pencil4life.com'
    },
    subject: 'Testing',
}).then(function (info) {
    console.log(info);
}).catch(function (error) {
    console.error(error);
});
