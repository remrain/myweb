exports.success = function(res, data){
    res.write(JSON.stringify({
        'success': 1,
        'message': 'ok',
        'data' : data,
    }));
    res.end();
}

exports.failure = function(res, msg){
    res.write(JSON.stringify({
        'success': 0,
        'message': msg,
    }));
    res.end();
}
