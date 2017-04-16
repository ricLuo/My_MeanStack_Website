// ----set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');

// ---configuration

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000;
// config files
var db = require('./config/db');


mongoose.connect("db.url")
  .then(()=> console.log('connection succussful'))
  .catch((err) => console.error(err));

app.use(express.static(__dirname + '/public'));

// HTTP request logger middleware for node.js
// ‘dev' :  Concise output colored by response status for development use
app.use(morgan('dev'));

//Returns middleware that only parses urlencoded bodies.
// This parser accepts only UTF-8 encoding of the body
app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(bodyParser.json());

//  json or Json Api semanticly on top of Json
app.use(bodyParser.json({type:'application/vdn.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));      //override http header, say XMLHttpRequest

app.use(cookieParser());

require('./app/routes')

app.listen(8080);
console.log("App Listening on Port 8080");
