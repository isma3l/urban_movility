/* eslint-disable no-undef */
const path = require('path');
const packageJSON = require('./package.json');

const APP_ENV = process.env.APP_ENV ?? 'development';
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require('dotenv').config({
  path: envPath,
});

const BUNDLE_ID = 'com.car-fast';
const PACKAGE = 'com.car-fast';
const NAME = 'car-fast';
const EXPO_ACCOUNT_OWNER = 'expo-owner';
const EAS_PROJECT_ID = 'b1c8f4d3-5f4e-4d3a-9f4e-2b4d3a9f4e2b';
const SCHEME = 'car-fast';

// @ts-ignore
const withEnvSuffix = (name) => {
  return APP_ENV === 'production' ? name : `${name}.${APP_ENV}`;
};

const clientEnv = {
  APP_ENV,
  NAME: NAME,
  SCHEME: SCHEME,
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,

  // ADD YOUR ENV VARS HERE TOO
  API_URL: process.env.API_URL,
};

const buildTimeEnv = {
  EXPO_ACCOUNT_OWNER,
  EAS_PROJECT_ID,
  // ADD YOUR ENV VARS HERE TOO
  SECRET_KEY: process.env.SECRET_KEY,
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
