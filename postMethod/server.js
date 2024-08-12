var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function(req,res){

response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        fav_language:req.body.fav_language,
        ulam1:req.body.ulam1,
        ulam2:req.body.ulam2,
        ulam3:req.body.ulam3,
        cars:req.body.cars
};

    console.log(response);
    res.end(JSON.stringify(response))
});

app.listen(4001, () => {
    console.log('Server is running on http://localhost:4001');
});