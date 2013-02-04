var mongo = require('./db.js');

function User(user){
    this.name = user.name;
    this.pass = user.pass;
}

module.exports = User;

User.prototype.add = function add(callback){
    var user = {
        name: this.name,
        pass: this.pass,
    };
    mongo.open(function(err, db){
        if (err){
            return callback(err);
        }
        db.collection('users', function(err, collection){
            if (err){
                mongo.close();
                return callback(err);
            }
            collection.ensureIndex('name', {unique: true});
            collection.insert(user, {safe: true}, function(err, user){
                mongo.close();
                callback(err, user);
            });
        });
    });
}

User.get = function(name, callback){
    mongo.open(function(err, db){
        if (err){
            return callback(err);
        }
        db.collection('users', function(err, collection){
            if (err){
                mongo.close();
                return callback(err);
            }
            collection.findOne({"name": name}, function(err, doc){
                mongo.close();
                if (doc){
                    var user = new User(doc);
                    callback(err, user);
                } else {
                    callback(err);
                }
            });
        });
    });
}
