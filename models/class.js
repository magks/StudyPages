var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClassSchema = new Schema(
  {
    name: String,
    course: {type: Schema.ObjectId, ref: "Course", require: true},
    //professor: {type: Schema.ObjectId, ref: "Professor"},
    professor: String,
    course_code: {type: String},
    type: {type: String, enum: ['Lecture', 'Discussion'] },       // Lecture or Discussion
    section: {type: String},
    days: [Date],
    start_time: {type: Date},
    end_time: {type: Date},
    place: {type: Schema.ObjectId, ref: "Place"},
    adminInfo: {type: Schema.ObjectId, ref: "AdminInfo"},
    textbooks: [Schema.ObjectId],

    study: {type: Schema.ObjectId, ref: "Study"}
  }
);

// Virtual for class info
ClassSchema
  .virtual('info')
  .get(function () {
    return 'Day(s): ' + this.days + '\n'
      + 'Time: ' + this.start_time + ' - ' + this.end_time
      + 'Place: ' + this.place.building + ' ' + this.place.room;
  });

// Virtual for class's URL
ClassSchema
  .virtual('url')
  .get(function () {
    return '/catalog/class/' + this._id;
  });

//Export model
module.exports = mongoose.model('Class', ClassSchema);
