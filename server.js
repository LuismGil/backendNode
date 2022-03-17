const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');

const db = require('./db');

const router = require('./network/routes');

db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(config.port, function () {
  console.log('App is listening at http://localhost:3000 '+ config.host +':' + config.port);
});