'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var user_middleware_1 = require("./user.middleware");
var router = express_1.Router();
router
    .post('/', user_controller_1.createUser)
    .get('/', user_middleware_1.userAuth, user_controller_1.getUser)
    .put('/', user_middleware_1.userAuth, user_controller_1.updateUser)
    .post('/login', user_controller_1.login)
    .put('/login', user_middleware_1.userAuth, user_controller_1.updateUserPassword)
    .all('/logout', user_controller_1.logout)
    .post('/forgotpassword', user_controller_1.forgotPassword)
    .get('/resetpassword/:userId/:reset_code', user_controller_1.checkResetCode)
    .post('/resetpassword/:userId/:reset_code', user_controller_1.resetPassword);
exports.default = router;
