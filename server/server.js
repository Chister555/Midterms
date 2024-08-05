var exress = require("express");
var app = exress()


app.get("/", function(request, response){
    response.send("Hello World!");
    
});


app.listen(3001, function(){
    console.log('Server running at http://localhost:3000');
});