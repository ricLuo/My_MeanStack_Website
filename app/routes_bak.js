// get mongoose models
var Test = require('./models/Test');
var User = require('./models/User');
var Upload = require('./models/Upload');

module.exports = function(app) {
  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // get all tests from database
  app.get('/api/getAllTests', function(req, res) {
    Test.find(function(err, tests) {
      if(err) res.send(err);
      res.json(tests);
    });
  });

  // get a test by given test id from database
  app.get('/api/getTest/:testId', function(req, res) {
    Test.find({'_id': req.params.testId}, function(err, test) {
      if(err) res.send(err);
      res.json(test);
    });
  });

  // create a test and insert the test to database
  app.post('/api/createTest', function(req, res) {
    var test = new Test(req.body);
    test.save(function(err) {
      if(err) res.send(err);
      else res.send(test.title + ' has been created')
    });
  });

  // delete all tests from database
  app.delete('/api/deleteAllTests', function(req, res) {
    Test.remove({}, function(err) {
      if(err) res.send(err);
      else res.send('all tests have been deleted');
    });
  });

  // delete the test by the given test id from database
  app.delete('/api/deleteTest/:testId', function(req, res) {
    //TODO
  });

  // get user data by username
  app.get('/api/getUser/:username', function(req, res) {
    User.find({'username': req.params.username}, function(err, user) {
      if(err) res.send(err);
      res.json(user);
    });
  });

  // get all users
  app.get('/api/getAllUsers', function(req, res) {
    User.find(function(err, users) {
      if(err) res.send(err);
      res.json(users);
    })
  })

  // signup user
  app.post('/api/createUser/:username/:password', function(req, res) {
    var user = new User({
      username: req.params.username,
      password: req.params.password,
      type: 'normal'
    });

    user.save(function(err) {
      if(err) res.send(err);
      else res.send(req.params.username + ' has been signed up')
    });
  });



  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });


  app.post('/api/uploadText',function(req,res){
      var upload = new Upload({
          Title: req.body.title,
          Content: req.body.content
      });
      console.log(upload.Title+'  '+upload.Content);
      upload.save(function(err,upload){
          if(err) throw(err);
          res.send(req.body.title + 'has been retrieved');
      })
  });


};
