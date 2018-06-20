'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var main_controller_1 = require("./main.controller");
var router = express_1.Router();
router.get('/', main_controller_1.default.getRoot);
exports.default = router;
