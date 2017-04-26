var Message = require('./models/Message.js');
var User = require('./models/User_test.js');

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



// -------------------Registration

app.post('/api/users', function(req, res){
  User.findOne({'username':req.body.username}, function(err, user){
    if(err){
      res.send(err);
    }
    if(user!=null)
      res.status(500).send({error:'User name has already been used'});
    else {
      User.create({
        username: req.body.username,
        password: req.body.password
      }, function(err, user){
          if(err){
            res.send(err);
          }
          User.findOne({'username':req.body.username}, function(err, user){
            if(err){
              res.send(err);
            }
            res.send(user);
            // res.status(500).send({error:'Something failed'});
          });
      });
    }

  });




// res.status(500).send({error:'Cound not establish connection'});

});

app.post('/api/authenticate', function(req, res){
  User.findOne({
    'username':req.body.username
  },function(err, user){
    if(err){
      res.send(err);
      console.log(err);
    }
    console.log(user);
    res.send(user);
  });
  // res.status(500).send({error:'Cound not establish connection'});

});

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname+'/../public/view/login.html'));
});

app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname+'/../public/view/register.html'));
});

app.get('/sentiment1', function(req, res){
  res.sendFile(path.join(__dirname+'/../public/view/SentimentAnalysis.html'));
});

app.get('/sentiment2', function(req, res){
  res.sendFile(path.join(__dirname+'/../public/view/MySentiment.html'));
});



// app.get('/oauth2callback', function(req, res){
//   res.redirect('http://www.mingxiaoluo.com');
// });




// ---------------------------send html file

app.get('*', function(req, res){
  // res.sendFile(path.resolve('public/js/index_test.html'));
  res.sendFile(path.join(__dirname+'/../public/view/index.html'));
  // C:\backup\Desktop\Web_Project\MyWebSite\public\js\index_test.html
});







};
