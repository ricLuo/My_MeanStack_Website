// grab the mongoose module
var mongoose = require('mongoose');

// define Test model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Message', {
  text: String,
  name: String,
  email: String,
  phone: String,
  date: Date
});
