var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysql_database_config = require('../config/database').connectionConfig;
/* GET home page. */
router.get('/', function(req, res, next) {
  var connection = mysql.createConnection(mysql_database_config);
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT 1 + 1 AS solution', function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  connection.end();
  res.render('index', { title: 'Express' });
});

module.exports = router;
