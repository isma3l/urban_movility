/* eslint-disable no-undef */
const path = require('path');
const packageJSON = require('./package.json');

const APP_ENV = process.env.APP_ENV ?? 'dev';
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require('dotenv').config({
  path: envPath,
});

const NAME = 'alToke';
const BUNDLE_ID = 'com.mycompany.altoke';
const PACKAGE = 'com.mycompany.altoke';

const SLUG = 'altoke';
const EXPO_ACCOUNT_OWNER = 'isma3ll';
const EAS_PROJECT_ID = '1aec238b-be4d-4a13-8927-4b4040071cde';
const SCHEME = 'altoke';

// @ts-ignore
const withEnvSuffix = (value, separator = '.') => {
  return APP_ENV === 'production' ? value : `${value}${separator}${APP_ENV}`;
};

const clientEnv = {
  APP_ENV,
  NAME: withEnvSuffix(NAME, ' '),
  SCHEME: withEnvSuffix(SCHEME, '-'),
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,
  SLUG: SLUG,

  // ADD YOUR ENV VARS HERE TOO
  API_URL: process.env.API_URL,
};

const buildTimeEnv = {
  EXPO_ACCOUNT_OWNER,
  EAS_PROJECT_ID,
  // ADD YOUR ENV VARS HERE TOO
  SECRET_KEY: process.env.SECRET_KEY,
  WEB_CLIENT_ID: process.env.WEB_CLIENT_ID,
  IOS_CLIENT_ID: process.env.IOS_CLIENT_ID
};

const Env = {
  ...clientEnv,
  ...buildTimeEnv,
};

module.exports = {
  clientEnv,
  buildTimeEnv,
  Env,
};
