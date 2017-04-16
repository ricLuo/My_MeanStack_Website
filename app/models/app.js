var mongoose = require('mongoose');
var assert = require('assert');

var url = 'mongodb://localhost/MyWebSite';
// mongoose.connect(url, function(err, db){
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   db.close;
// });

mongoose.connect(url);

var schema = new mongoose.Schema({
  name:String,
  completed:String,
  updated_at:{
    type: Date,
    default: Date.now
  }
})

var MyWeb = mongoose.model('MyWeb',schema);
// console.log("sb");

var myweb = new MyWeb({
  name: 'Master NodeJS',
  completed: 'false',
})

myweb.save(function(err){
  if(err){
    console.log(err);
  }
  else
    console.log(myweb);
});

MyWeb.create({
  name: 'Create something with Mongoose',
  completed: true,
  note: 'this is one'},
  function(err, myweb){
    if(err) console.log(err);
    else console.log(myweb);
  });

MyWeb.find(function(err, todos){
  if(err) return console.error(err);
  console.log(MyWeb);                           //db.mywebs.find()  mongo shell
});
