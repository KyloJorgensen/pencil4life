'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_middleware_1 = require("../../user/user.middleware");
var item_controller_1 = require("./item.controller");
var request_router_1 = require("./request/request.router");
var router = express_1.Router();
router
    .use('/request', request_router_1.default)
    .post('/', user_middleware_1.adminAuth, item_controller_1.createItem)
    .put('/', user_middleware_1.adminAuth, item_controller_1.updateItem)
    .get('/', item_controller_1.getItems)
    .get('/:_itemId', item_controller_1.getItem);
exports.default = router;
