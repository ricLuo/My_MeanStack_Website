// grab the mongoose module
var mongoose = require('mongoose');
var crypto = require('crypto');
// define User model
// module.exports allows us to pass this to other files when it is called

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  type: String,
  email:String,
  head:String,
  tests: [{
    title: String,
    questions : [{
      question : String,
      _options: [{
        statement: String,
        correct: Boolean,
        selected: Boolean
      }]
    }]
  }]
});

UserSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var userModel = mongoose.model('User', UserSchema);

function User(user){
    this.username = user.Title;
    this.password = user.password;
    this.email = user.email;
    this.head = user.head;
    this.tests = user.tests;
}

User.prototype.save = function(callback){
    var md5 = crypto.createHash('md5'),
        email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'),
        head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
    var user = {
        username:this.username,
        password:this.password,
        email:this.email,
        tests:this.tests,
        head:this.head
    };
    var newUser = new userModel(user);

    newUser.save(function (err,user){
        if(err) {
            return callback(err);
        }
        callback(null,user);
    });
}

User.get = function(name,callback){
    userModel.findOne({name: name},function(err,user){
        if(err) {
            return callback(err);
        }
        callback(null,user);
    });
};

module.exports = User;
