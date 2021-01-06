import { config } from 'dotenv';
config();

export const API_KEY: string = process.env.API_KEY;
export const MODE: string = process.env.NODE_ENV;
export const MONGO_URI: string =
  MODE === 'production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/ecommerce';
export const MONGO_URI_TEST: string =
  MODE === 'production' ? process.env.MONGO_URI_TEST : 'mongodb://localhost:27017/ecommerceTest';
