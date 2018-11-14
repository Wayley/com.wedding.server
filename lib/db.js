var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '../config/database.js')[env];

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
