'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize-cockroachdb');
var basename = path.basename(__filename);

var db = {};

var sequelize = new Sequelize(config.database.read.DB_NAME, config.database.read.DB_USERNAME, config.database.read.DB_PASSWORD, {
  host: config.database.read.DB_HOST,
  port: config.database.read.DB_PORT,
  dialect: config.database.read.DIALECT,
  pool: config.database.read.POOL,
  logging: config.database.read.LOGGING
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

try {
  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}
catch (err) { events.emit('notify', err); }



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;