// packages AKA dependencies
var express    = require('express');    // call express
var bodyParser = require('body-parser');
var path       = require('path');
var app        = express();         // define our app using express

// App Config
// Here we setup the body parser for middleware,
// set the view engine to jade, tell express to 
// look for views from res.render() inside './views'
// and to serve up our front end files form the '/public'
// directory
app.use(bodyParser());
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(__dirname + '/public'));

// Application Routes
app.get('/', function(req, res) {
    console.log("req.head: " + req.head);
    console.log("req.body: " + req.body)
    res.render('index');

});



var port = process.env.PORT || 8008;
app.listen(port);
console.log('now serving on port ' + port);