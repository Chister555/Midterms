var exress = require("express");
var app = exress();


app.get("/", function(request, response){
    response.send('You have successfully created your second app! ');
});



var server = app.listen(2002, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});
