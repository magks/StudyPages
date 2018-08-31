
var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var StudySchema = new Schema(
  {
    homework: {type: Schema.ObjectId, ref: "Homework"},
    outline: {type: Schema.ObjectId, ref: "StudyOutline"},
    mindmap: {type:Schema.ObjectId, ref: "MindMap"},
    files: {type: Schema.ObjectId, ref: "StudyFiles"},
    status: {type: String, enum:['Current', 'Finished']},
    class: {type: Schema.ObjectId, ref: "Class"}

    //midterm: Schema.Types.Mixed
    //final: Schema.Types.Mixed
    //schedule: Schema.Types.Mixed
  }
);

//Virtual for this study's time left
StudySchema
  .virtual('time_left')
  .get( function() {
    return 'TODO: implement time until final';
  });

// Virtual for this study's URL
StudySchema
  .virtual('url')
  .get(function () {
    return '/catalog/study/' + this._id;
  });

StudySchema
  .virtual('time_left_formatted')
  .get(function () {
    return moment(this.time_left).format('MMMM Do, YYYY');
  });
//Export model
module.exports = mongoose.model('Study', StudySchema);
