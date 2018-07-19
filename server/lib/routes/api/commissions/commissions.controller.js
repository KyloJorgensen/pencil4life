'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("../../../utilities/nodemailer");
// Creates Commission request Item.
exports.createCommissionRequest = function (req, res, next) {
    // let changes:IShopItemModel;
    // if ('body' in req) {
    //     if ('name' in req.body) {
    //         changes.name = req.body.name;
    //     } else {
    //         var error = new Error('missing name');
    //         error.name = 'BadRequestError'
    //         return next(error);
    //     }
    //     if ('price' in req.body) {
    //         changes.price = req.body.price;
    //     } 
    //     if ('stock' in req.body) {
    //         changes.stock = req.body.stock;
    //     } 
    //     if ('sold' in req.body) {
    //         changes.sold = req.body.sold;
    //     } 
    //     if ('discontinued' in req.body) {
    //         changes.discontinued = req.body.discontinued;
    //     }
    // } else {
    //     var error = new Error('missing body');
    //     error.name = 'BadRequestError'
    //     return next(error);
    // }
    // changes.created_by = req.session._userId;
    // changes.updated_by = req.session._userId;
    // let query = ShopItem.create(changes);
    // query.then(function(shopItemDoc) {
    //     res.status(200).json({_id: shopItemDoc._id});    
    // }).catch(function(error) {
    //     console.log(error)
    //     next(error);
    // });
    // xgjz wpfz pdtm didy
    // ypkv jgak iumz eqad
    nodemailer_1.sendEmail('testuser', 'secretpass', {
        from: {
            name: 'Kylo',
            address: '	kylo@pencil4life.com'
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
    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'zume46wrnk6jplb6@ethereal.email', // generated ethereal user
    //         pass: '4aRkVVd9rV9paPq3SX' // generated ethereal password
    //     }
    // });
    // // setup email data with unicode symbols
    // let mailOptions = {
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: 'bar@example.com, baz@example.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>' // html body
    // };
    // // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
    res.send('hello world');
};
exports.default = { createCommissionRequest: exports.createCommissionRequest };
