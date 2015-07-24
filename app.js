/* global process */
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Also need to add a NODE_ENV config var in heroku app settings
console.log = process.env.NODE_ENV ? function(){} : console.log;
	



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

console.log(process.env);

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
