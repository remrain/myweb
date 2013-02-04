exports.md5 = function(str){
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    var hash = md5.update(str).digest('hex');
    return hash;
}

