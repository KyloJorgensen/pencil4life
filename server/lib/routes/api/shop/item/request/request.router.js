'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var request_controller_1 = require("./request.controller");
var router = express_1.Router();
router
    .post('/', request_controller_1.createItemRequest)
    .put('/', request_controller_1.updateItemRequest)
    .get('/', request_controller_1.getItemRequests)
    .get('/:_itemId', request_controller_1.getItemRequest);
exports.default = router;
