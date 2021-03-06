var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port',(process.env.PORT||3000));
http.listen (app.get('port'),function() {
  console.log("Listening to port number "+app.get('port'));
});
Room.io = io;

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);

app.set('layout'); 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});