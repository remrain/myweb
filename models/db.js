var config = require('../config/main.js').mongo;
var mongo = require('mongodb');
var Db = mongo.Db;
var Connection = mongo.Connection;
var Server = mongo.Server;

module.exports = new Db(config.db, new Server(config.host, Connection.DEFAULT_PORT, {}));
