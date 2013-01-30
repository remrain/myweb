var path = require('path');

exports.mongo = require('./mongo.js');
exports.routes = require('./router.js').routes;
exports.static = path.join(__dirname, '../static');
exports.views = path.join(__dirname, '../views');
exports.logger = 'dev';
exports.port = 8081;
