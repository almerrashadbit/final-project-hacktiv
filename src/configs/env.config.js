require('dotenv').config();

const env = process.env.NODE_ENV || 'dev'; // 'dev', 'test', 'prodInt

const dev = {
    host: process.env.DEV_HOST,
    port: Number(process.env.DEV_PORT),
    baseURL: process.env.DEV_BASEURL,
    idTokenKey: process.env.DEV_IDTOKENKEY
};

const test = {
    host: process.env.TEST_HOST,
    port: Number(process.env.TEST_PORT),
    baseURL: process.env.TEST_BASEURL,
    idTokenKey: process.env.TEST_TOKEN_KEY
};

const prod = {
    host: process.env.PROD_HOST,
    port: Number(process.env.PROD_PORT),
    baseURL: process.env.PROD_BASEURL,
    idTokenKey: process.env.PROD_TOKEN_KEY
};

const config = {
  dev,
  test,
  prod,
};

module.exports = config[env];
