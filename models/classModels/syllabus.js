var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var SyllabusSchema = new Schema(
  {
    link: String

  }
);

module.exports = mongoose.model('Syllabus', SyllabusSchema);
