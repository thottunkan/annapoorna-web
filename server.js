// Require express and create an instance of it
var express = require('express');
var app = express();
app.use(express.static('assets'));
app.use(express.static('gulp-tasks'));
app.use(express.static('partials'));
app.use(express.static('index.html'));
// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
   // res.sendFile(__dirname+'/partials/index.html');
   res.send("hello");
});

// On localhost:3000/welcome
app.get('/adduser', function (req, res) {
    res.sendFile(__dirname+'/pages/samples/adduser.html');
});
app.get('/addsale', function (req, res) {
    res.sendFile(__dirname+'/pages/samples/addsale.html');
});


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
