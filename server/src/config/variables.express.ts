'use strict';

import { config } from 'dotenv';
import { join }from 'path';

const result = config({path: join(__dirname, '../../../.env')})

if (result.error) {
  throw result.error
}

console.log(result.parsed)
console.log(process.env.NODE_ENV)
export const NODE_ENV = process.env.NODE_ENV || 'production';
export const HTTP_PORT = process.env.HTTP_PORT || '9001';
export const EXPRESS_LISTEN_MESSAGE = 'Listening on port: ';
export const MONGODB_PORT = process.env.MONGODB_PORT || "";
export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/pencil4life';
export const SESSION_SECRET = process.env.SESSION_SECRET || '374c62f257a71467e636c59b1dde6';
export const SESSION_COLLECTION = process.env.SESSION_COLLECTION || 'sessions';
export const IMAGE_DIR = join(__dirname , '../../../', process.env.IMAGE_DIR || 'assests/images/');
export const BT_ENVIRONMENT = process.env.BT_ENVIRONMENT || 'sandbox';
export const BT_MERCHANT_ID = process.env.BT_MERCHANT_ID || 'cvnqcc9z7srpfkcf';
export const BT_PUBLIC_KEY = process.env.BT_PUBLIC_KEY || 'k7x3r67pkqn4m59p';
export const BT_PRIVATE_KEY = process.env.BT_PRIVATE_KEY || 'e4614ba54f975cd132f2b52437b5fbe6';
export const NM_NOREPLY_EMAIL = process.env.NM_NOREPLY_EMAIL || 'noreply@pencil4life.com';
export const NM_COMMISSIONS_EMAIL = process.env.NM_COMMISSIONS_EMAIL || 'commissions@pencil4life.com';

export default {
  NODE_ENV: NODE_ENV,
  HTTP_PORT: HTTP_PORT,
  EXPRESS_LISTEN_MESSAGE: EXPRESS_LISTEN_MESSAGE,
  MONGODB_PORT: MONGODB_PORT,
  MONGODB_URL: MONGODB_URL,
  SESSION_SECRET: SESSION_SECRET,
  SESSION_COLLECTION: SESSION_COLLECTION,
  IMAGE_DIR: IMAGE_DIR,
  BT_ENVIRONMENT: BT_ENVIRONMENT,
  BT_MERCHANT_ID: BT_MERCHANT_ID,
  BT_PUBLIC_KEY: BT_PUBLIC_KEY,
  BT_PRIVATE_KEY: BT_PRIVATE_KEY,
  NM_NOREPLY_EMAIL: NM_NOREPLY_EMAIL,
  NM_COMMISSIONS_EMAIL: NM_COMMISSIONS_EMAIL, 
};