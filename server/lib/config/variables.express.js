'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var result = dotenv_1.config({ path: path_1.join(__dirname, '../../../.env') });
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
console.log(process.env.NODE_ENV);
exports.NODE_ENV = process.env.NODE_ENV || 'production';
exports.HTTP_PORT = process.env.HTTP_PORT || '9001';
exports.EXPRESS_LISTEN_MESSAGE = 'Listening on port: ';
exports.MONGODB_PORT = process.env.MONGODB_PORT || "";
exports.MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/pencil4life';
exports.SESSION_SECRET = process.env.SESSION_SECRET || '374c62f257a71467e636c59b1dde6';
exports.SESSION_COLLECTION = process.env.SESSION_COLLECTION || 'sessions';
exports.IMAGE_DIR = path_1.join(__dirname, '../../../', process.env.IMAGE_DIR || 'assests/images/');
exports.BT_ENVIRONMENT = process.env.BT_ENVIRONMENT || 'sandbox';
exports.BT_MERCHANT_ID = process.env.BT_MERCHANT_ID || 'cvnqcc9z7srpfkcf';
exports.BT_PUBLIC_KEY = process.env.BT_PUBLIC_KEY || 'k7x3r67pkqn4m59p';
exports.BT_PRIVATE_KEY = process.env.BT_PRIVATE_KEY || 'e4614ba54f975cd132f2b52437b5fbe6';
exports.NM_NOREPLY_EMAIL = process.env.NM_NOREPLY_EMAIL || 'noreply@pencil4life.com';
exports.NM_COMMISSIONS_EMAIL = process.env.NM_COMMISSIONS_EMAIL || 'commissions@pencil4life.com';
exports.NM_CONTACT_EMAIL = process.env.NM_CONTACT_EMAIL || 'contact@pencil4life.com';
exports.default = {
    NODE_ENV: exports.NODE_ENV,
    HTTP_PORT: exports.HTTP_PORT,
    EXPRESS_LISTEN_MESSAGE: exports.EXPRESS_LISTEN_MESSAGE,
    MONGODB_PORT: exports.MONGODB_PORT,
    MONGODB_URL: exports.MONGODB_URL,
    SESSION_SECRET: exports.SESSION_SECRET,
    SESSION_COLLECTION: exports.SESSION_COLLECTION,
    IMAGE_DIR: exports.IMAGE_DIR,
    BT_ENVIRONMENT: exports.BT_ENVIRONMENT,
    BT_MERCHANT_ID: exports.BT_MERCHANT_ID,
    BT_PUBLIC_KEY: exports.BT_PUBLIC_KEY,
    BT_PRIVATE_KEY: exports.BT_PRIVATE_KEY,
    NM_NOREPLY_EMAIL: exports.NM_NOREPLY_EMAIL,
    NM_COMMISSIONS_EMAIL: exports.NM_COMMISSIONS_EMAIL,
    NM_CONTACT_EMAIL: exports.NM_CONTACT_EMAIL,
};
