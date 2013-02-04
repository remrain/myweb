var common = require('./base.js');

exports.action = function(req, res){
    req.session.user = null;
    common.success(res);
}
