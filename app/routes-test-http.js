var test_http = require('./models/test-http.js');

function get(req,res){
  test_http.find(function(err, test_http){
      if(err){
        res.send(err);
      }
      res.json(test_http);
  });
};

module.exports = function(app){
  app.get('/api/testhttp', function(req, res){
    get(req, res);
    // res.send('hello');
  });

  app.post('/api/testhttp', function(req, res){
    test_http.create({
      text: req.body.text
    }, function(err, test_http){
      if (err)
          res.send(err);
      get(req, res);
    });
  });

var path = require('path');
  app.get('*', function(req, res){
    // var static_path = path.join(__dirname, '/../public/index.html');
    // console.log(static_path);
    res.sendFile(path.join(__dirname, '/../public/view/index.html'));
    // res.sendFile(path.join(__dirname, '/../public/js/test-http.js'));
    // res.sendFile(path.join(__dirname, '/../public/js/app-http.js'));
    // res.send('hello');
    // res.sendFile('C:/backup/Desktop/Web_Project/MyWebSite/public/js/test_http.html');
  });


};
