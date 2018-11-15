var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require('../config/database.js')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);
// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
