var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.send('You have successfully created second app! ');
});

var server = app.listen(8083, function(){
    var host = server.address().address
    var port = server.address().port

    console.groupCollapsed("Example app listening at http://%s:%s", host, port)
});