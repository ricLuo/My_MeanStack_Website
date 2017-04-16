var Message = require('./models/Message.js');

function get(res){
  Message.find(function(err, message){
      if(err){
        res.send(err);
      }
      res.json(message);
  });
};

module.exports = function(app){



//  get all data from model
app.get('/api/message',function(req,res){
    get(res);
});

app.post('/api/message', function(req,res){

  var currentDate = new Date();

  //create database
  Message.create({
    // text:req.body.text,
    // done:false
    text: req.body.text,
    name: req.body.userName,
    email: req.body.email,
    phone: req.body.phone,
    date: currentDate
  }, function(err, message){
    if(err){
      res.send(err);
    }
    //return all the data of model after create
    get(res);
  });
});

app.delete('/api/message/:message_id', function(req,res){
  Message.remove({
    _id:req.params.message_id
  }, function(err, todos){
    if(err)
      res.send(err);
    get(res);
  });
});
var path = require('path');

app.get('*', function(req, res){
  // res.sendFile(path.resolve('public/js/index_test.html'));
  res.sendFile(path.join(__dirname+'/../public/view/index.html'));
  // C:\backup\Desktop\Web_Project\MyWebSite\public\js\index_test.html
});
};
