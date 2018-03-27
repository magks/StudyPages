var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudyFilesSchema = new Schema(
  {
    link: String;
  }
);

module.exports = mongoose.model('StudyFiles', StudyFilesSchema);
