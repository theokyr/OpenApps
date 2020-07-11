const express = require('express');
const functions = require('firebase-functions');
const request = require('request-promise');
const admin = require('firebase-admin');
const cors = require('cors');
const {info} = require("firebase-functions/lib/logger");
const {error} = require("firebase-functions/lib/logger");
admin.initializeApp();

const ERROR_CODE_ROUTE_NOT_FOUND: number = 1000;

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

app.post('/callback', (req: any, res: any) => {
  info(`/callback - Init`);
  if (!req.query) {
    error(`Invalid query`)
    res.status(400);
    res.send({
      'error': "No code has been specified"
    });
  }
  info(`/callback - Getting query code`);
  const code = !!req.query.code ? req.query.code : "";
  info(`Client ID: ${functions.config().auth.client_id.value}`);
  request({
    method: 'POST',
    url: 'https://login.it.teithe.gr/token',
    form: {
      "client_id": functions.config().auth.client_id.value,
      "client_secret": functions.config().auth.client_secret.value,
      "grant_type": "authorization_code",
      "code": code,
    },
    headers: {
      'Conent-Type': 'application/x-www-form-urlencoded',
    }
  }).pipe(res);
});

app.get((req: any, res: any) => {
  res.status(404).json({
    error: 'Could not find route',
    code: ERROR_CODE_ROUTE_NOT_FOUND
  })
})

exports.api = functions
  // .region('europe-west1')
  .https
  .onRequest(app);
