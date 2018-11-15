var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var dbConfig = require(__dirname + '/../config/database.js')[env];

var basename = path.basename(__filename);
var modelsDirname = path.resolve(__dirname, '../models'); // modelsDir

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.options
);
// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    console.log('--------------------------------------------------------');
    throw Error(err);
  });

var User = sequelize.define('user', {
  username: Sequelize.STRING
});
exports.User = User;
// import 导入model
// fs.readdirSync(modelsDirname)
//   .filter(file => {
//     return (
//       // file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//       file.indexOf('.') !== 0 && file.slice(-3) === '.js'
//     );
//   })
//   .forEach(file => {
//     var Model = sequelize['import'](path.join(modelsDirname, file));
//     console.log(Model, '------');

//     db[Model.name] = Model;
//   });
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;
