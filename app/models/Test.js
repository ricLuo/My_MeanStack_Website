// grab the mongoose module
var mongoose = require('mongoose');

// define Test model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Test', {
  title: String
  questions : [{
    question : String,
    _options: [{
      statement: String,
      correct: Boolean
    }]
  }]
});
