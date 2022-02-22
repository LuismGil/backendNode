const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": 'Our personality value'
  })
  response.success(req, res, 'Messages List');
});

router.post('/', function (req, res) {
  console.log(req.body);

  if (req.query.error == "ok") {
    response.error(req, res, 'Unespected Error', 500, 'It is only a simulation of the errors');
  } else {
    response.success(req, res, 'Create', 201);
  }
});

module.exports = router;