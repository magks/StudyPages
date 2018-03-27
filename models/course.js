
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
  {
    units: {type: Number, min: 0, max: 5},
    dept_name: String,
    course_number: String,
    title: String,
    description: String,
    prerequisites: [{type: Schema.ObjectId, ref: "Course", default: null}]
  }
);

// Virtual for course's URL
CourseSchema
  .virtual('url')
  .get(function () {
    return '/catalog/course/' + this._id;
  });

//Export model
module.exports = mongoose.model('Course', CourseSchema);
