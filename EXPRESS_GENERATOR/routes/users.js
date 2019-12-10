var express = require('express');
var router = express.Router();
var gesuRouter = require('./routers/users/gesu');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
