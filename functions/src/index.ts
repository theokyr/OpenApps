const express = require('express');
const functions = require('firebase-functions');
const request = require('request-promise');
const admin = require('firebase-admin');
const cors = require('cors');
const {info} = require("firebase-functions/lib/logger");
const {error} = require("firebase-functions/lib/logger");
admin.initializeApp();

const app = express();

app.use(cors({origin: true}));
app.post('/callback', (req: any, res: any) => {
  if (!req.query) {
    error(`Invalid query`)
    res.status(400);
    res.send({
      'error': "No code has been specified"
    });
  }
  const code = !!req.query.code ? req.query.code : "";
  info(`Client ID: ${functions.config().auth.client_id.value}`)
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

exports.api = functions
  .region('europe-west1')
  .https
  .onRequest(app);
