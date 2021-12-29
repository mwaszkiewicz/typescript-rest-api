/* eslint-disable no-undef */
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  name: 'REST API',
  port: process.env.PORT,
  base_url: process.env.BASE_URL,
};
