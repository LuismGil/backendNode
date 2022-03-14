const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

require('dotenv').config()

const dbUser = encodeURIComponent(process.env.DB_USER)
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD)
const dbHost = encodeURIComponent(process.env.DB_HOST)
const dbName = process.env.DB_NAME

db(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`)

// const router = require('./components/message/network');
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('App is listening at http://localhost:3000')