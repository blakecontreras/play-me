var express = require('express');
var router = express.Router();
var api = require('./api-handler');

router.get('/hello', function(req, res) {
  res.send("Hello world");
})

module.exports = router;
