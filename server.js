// ----set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');

var path=require('path');
// ---configuration

// config files
var db = require('./config/db.js');

// set our port
var port = process.env.PORT || 8080;

mongoose.Promise = require('bluebird');

// mongoose.connect("mongodb://localhost/MyWebSite")
mongoose.connect(db.url)
  .then(()=> console.log('connection succussful'))
  .catch((err) => console.error(err));

// app.use(express.static('./public'));
var static_path = path.join(__dirname, './public');
console.log(static_path);
app.use(express.static(path.join(__dirname, 'public')));


// HTTP request logger middleware for node.js
// ‘dev' :  Concise output colored by response status for development use
app.use(morgan('dev'));

//Returns middleware that only parses urlencoded bodies.
// This parser accepts only UTF-8 encoding of the body
app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(bodyParser.json());

//  json or Json Api semanticly on top of Json
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));      //override http header, say XMLHttpRequest

// app.use(cookieParser());

require('./app/routes.js')(app);



// ------------------------test

//
// var router = require('./models/Upload')
//
//
// //  get all data from model
// app.get('/myweb',function(req,res){
//     model_to_replace.find(function(err, model){
//         if(err)
//           res.send(err);
//         res.json(model);
//     });
// });
//
// app.post('/myweb/model', function(req,res){
//   //create database
//   model_to_replace.create({
//     text:req.body.text,
//     done:false
//   }, function(err, model){
//     if(err)
//       res.send(err);
//     //return all the data of model after create
//     model_to_replace.find(function(err, model){
//       if(err)
//         res.send(err);
//       res.json(model);
//     });
//   });
// });
//
// app.delete('/myweb/model/:model_id', function(req,res){
//   model_to_replace.remove({
//     _id:req.params.model_id
//   }, function(err, model){
//     if(err)
//       res.send(err);
//     model_to_replace.find(function(err, model){
//       if(err)
//         res.send(err);
//       res.send(model);
//     });
//   });
// });
//
//
// app.get('*', function(req,res){
//   res.send('../public/js/index_test.html');
// });


// --------------------------------


app.listen(port);
console.log("App Listening on Port "+port);
