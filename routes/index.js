var express = require('express');
var router = express.Router();
var Models = require('../lib/db');

var userModel = Models.User;
/* GET home page. */
router.get('/', function(req, res, next) {
  // userModel.findAll().then(function(users) {
  //   console.log(users, '---------=');
  // });
  console.log();

  res.render('index', { title: 'Express', users: [{ name: 'edsass' }] });
});

module.exports = router;
