'use strict';
import { createTransport, SendMailOptions } from 'nodemailer';

import { Options } from 'nodemailer/lib/smtp-transport';
import { NM_SMTP_ADDRESS, NM_SMTP_PORT } from '../config/variables.express';

export const sendEmail = (username: string, password: string, mailOptions: SendMailOptions, callback?: (error: Error, info: any ) => void) => {
    // create reusable transporter object using the default SMTP transport
    let transport: Options = {};
    
    
    transport.host = NM_SMTP_ADDRESS;
    transport.port = Number(NM_SMTP_PORT);
    transport.secure = false; // true for 465, false for other port
    transport.auth = {
        type: 'login',
        user: username, // generated ethereal user
        pass: password, // generated ethereal password
    };
    transport.tls = {};
    transport.tls.rejectUnauthorized = false;
    transport.debug = true;
    transport.logger = true;

    const transporter = createTransport(transport);

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
    } else {
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject(error);
                }
                resolve(info);        
            });
        });
    }
};

sendEmail('testuser', 'secretpass', {
    from: {
        name: 'testuser',
        address: 'testuser@pencil4life.com'
    },
    to: {
        name: 'Kylo', 
        address: 'kylo@pencil4life.com'
    },
    subject: 'Testing',

    
}).then(info => {
    console.log(info);
}).catch(error => {
    console.error(error);
});