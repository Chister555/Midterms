var exress = require("express");
var app = exress();


app.get("/", function(request, response){
    console.log("A POST request for the homepage is accessed. ");
    response.send("Here is the POST Method! ");
    
});

//THIS RESPONDS A POST RESQUEST FOR THE HOMEPAGE

app.post('/', function (request, response){
    console.log("A POST request for the homepage is accessed. ");
    response.send('Here is the POST method ');
});

//THIS RESPONDS A GET REQUEST FOR THE /LIST_USER PAGE
app.get('/list_user', function (request, response){
    console.log("Got a GET request for /list_user. ");
    response.send('This is Page Listening ');
});

//THIS RESPONDS A GET REQUEST FOR abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (request, response){
    console.log("Got a GET request for /ab*cd. ");
    response.send('Pattern Match Page ');
});

app.get('/user_profile', function (request, response){
    console.log("Got a GET request for /user_profile ");
    response.send('Chester Lance Cruz ');
});

var server = app.listen(4003, function(){
    var host = server.address().address
    var port = server.address().port

    console.log ("Example app listening at http://%s:%s", host, port)
});




// var exress = require("express");
// var app = exress();


// app.get("/", function(request, response){
//     console.log("A POST request for the homepage is accessed. ");
//     response.send("Here is the POST Method! ");
    
// });

// //THIS RESPONDS A POST RESQUEST FOR THE HOMEPAGE

// app.post('/', function (request, response){
//     console.log("A POST request for the homepage is accessed. ");
//     response.send('Here is the POST method ');
// });

// //THIS RESPONDS A GET REQUEST FOR THE /LIST_USER PAGE
// app.get('/list_user', function (request, response){
//     console.log("Got a GET request for /list_user. ");
//     response.send('This is Page Listening ');
// });

// //THIS RESPONDS A GET REQUEST FOR abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function (request, response){
//     console.log("Got a GET request for /ab*cd. ");
//     response.send('Pattern Match Page ');
// });




// var server = app.listen(4000, function(){
//     var host = server.address().address
//     var port = server.address().port

//     console.log ("Example app listening at http://%s:%s", host, port)
// });