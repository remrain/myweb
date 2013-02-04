var common = require('./base.js');
var math = require('../models/math.js');

exports.action = function(req, res){
    var User = require('../models/user.js');
    var name = req.body.name;
    var pass = math.md5(req.body.pass);
    var msg  = "噢，失败了，过一会再试试吧";
    var newUser = new User({"name": name, "pass": pass});
    User.get(name, function(err, user){
        if (err){
            common.failure(res, msg);
        } else if(user) {
            common.failure(res, "这个账户已经被注册啦");
        } else {
            newUser.add(function(err, user){
                if (err){
                    common.failure(res, '噢，失败了，过一会再试试吧');
                } else {
                    req.session.user = user;
                    common.success(res);
                }
            });
        }
    });
}
