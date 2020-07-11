const express = require('express');
const functions = require('firebase-functions');
const request = require('request-promise');
const admin = require('firebase-admin');
const cors = require('cors');
const {info} = require("firebase-functions/lib/logger");
const {error} = require("firebase-functions/lib/logger");
admin.initializeApp();

const ERROR_CODE_ROUTE_NOT_FOUND: number = 1000;
const ERROR_CODE_ROUTE_INVALID_PARAMS: number = 1001;

const app = express();
info(`Init`)
const API_PREFIX = 'api';

app.use(cors({origin: true}));

// Rewrite Firebase hosting requests: /api/:path => /:path
app.use((req: any, res: any, next: any) => {
  info(`/api - Rewritan from ${req.url}`);
  if (req.url.indexOf(`/${API_PREFIX}/`) === 0) {
    req.url = req.url.substring(API_PREFIX.length + 1);
    info(`/api - Rewrote to ${req.url}`);
  }
  info(`/api - Returning next ${req.url}`);
  next();
});

app.get('/auth/callback/:code', (req: any, res: any) => {
  info(`/callback - Init`);
  info(`/callback - Params:`, req.params);

  if (!req.params.code) {
    error("/callback ERROR 1001 - no code")
    res.status(400).json({
      error: 'Invalid parameters',
      code: ERROR_CODE_ROUTE_INVALID_PARAMS
    })
    return;
  }

  const code = !!req.params.code ? req.params.code : "";

  info(`/callback - Got Code '${code}'`);
  info(`Client ID: ${functions.config().auth.client_id}`);
  request({
    method: 'POST',
    url: 'https://login.it.teithe.gr/token',
    form: {
      "client_id": functions.config().auth.client_id,
      "client_secret": functions.config().auth.client_secret,
      "grant_type": "authorization_code",
      "code": code,
    },
    headers: {
      'Conent-Type': 'application/x-www-form-urlencoded',
    }
  }).pipe(res);
});

app.get('*', (req: any, res: any) => {
  res.status(404).json({
    error: 'Could not find route',
    code: ERROR_CODE_ROUTE_NOT_FOUND
  })
})

exports.api = functions
  // .region('europe-west1')
  .https
  .onRequest(app);
