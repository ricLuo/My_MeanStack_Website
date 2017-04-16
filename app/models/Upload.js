var mongoose = require('mongoose');

var uploadSchema = new mongoose.Schema(
    {
        Title:String,
        Content:String,
        date:Date
    },
    {
        collection:'venkat'
    }
);

uploadSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var uploadModel = mongoose.model('Upload',uploadSchema);

function Upload(upload){
    this.Title = upload.Title;
    this.Content = upload.Content;
    this.date = upload.date;
}


Upload.prototype.save = function(callback){
    var upload = {
        Title:this.Title,
        Content:this.Content,
        date:this.date
    };
    var newUpload = new uploadModel(upload);

    newUpload.save(function (err,upload){
        if(err) {
            return callback(err);
        }
        callback(null,upload)
    });

}

module.exports = Upload;
