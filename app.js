var express = require('express');
var config = require('./config/main.js');
var http = require('http');
var Mongo = require('connect-mongo')(express);
var ect = require('ect');
var ectRender = ect({root: config.views, watch: true});

var app = express();

app.configure(function(){
    app.set('port', config.port);
    app.disable('x-powered-by');
    app.use(express.favicon());
    app.use(express.logger(config.logger));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.cookieParser());
    app.use(express.session({
        secret: config.mongo.cookieSecret,
        store: new Mongo({
            db: config.mongo.db
        })
    }));
    app.use(express.static(config.static));

    app.set('view engine', 'html');
    app.engine('.html', ectRender.render);
    for (var i in config.routes){
        var controller = require('./controllers/' + config.routes[i]);
        app.all(i, controller.action);
    }
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

