var mongoose = require('mongoose')
var Schema = mongoose.Schema;


//TODO When a syllabus is added as a link to a syllabus
// 1. parse linked location
// 2. return
//    a. calendar of dates
//    b. grading criteria (percentages of each part of the class)
var SyllabusSchema = new Schema(
  {
    link: String

  }
);

module.exports = mongoose.model('Syllabus', SyllabusSchema);
