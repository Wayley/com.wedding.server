var express = require('express');
var router = express.Router();

var Models = require('../lib/db');
var UserModel = Models.User;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create', function(req, res, next) {
  UserModel.create({
    username: req.body.username
  }).then(function(ee) {
    res.redirect('/');
  });
});
module.exports = router;
