var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudyOutlineSchema = new Schema(
  {
    link: String;
  }
);

module.exports = mongoose.model('StudyOutline', StudyOutlineSchema);
