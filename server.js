const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": 'Our personality value'
  })
  res.send('Messages List')
})

router.post('/message', function (req, res) {
  console.log(req.body);
  console.log(req.query);
  res.status(201).send({error: '', body: 'Create'})
  res.send('Messages ' + req.body.text + ' added')
})

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

app.listen(3000);
console.log('App is listening at http://localhost:3000')