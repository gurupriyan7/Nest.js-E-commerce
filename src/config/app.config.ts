import { config } from 'dotenv';
config();

export const appConfig = {
  connectionUrl: process.env.MONGO_URL ?? '',
};
