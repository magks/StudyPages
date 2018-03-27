
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudySchema = new Schema(
  {
    homework: {type: Schema.ObjectId, ref: "Homework"},
    outline: {type: Schema.ObjectId, ref: "StudyOutline"},
    mindmap: {type:Schema.ObjectId, ref: "MindMap"},
    files: {type: Schema.ObjectId, ref: "StudyFiles"}

    //midterm: Schema.Types.Mixed
    //final: Schema.Types.Mixed
    //schedule: Schema.Types.Mixed
  }
);

// Virtual for this study's URL
StudySchema
  .virtual('url')
  .get(function () {
    return '/catalog/study/' + this._id;
  });

//Export model
module.exports = mongoose.model('Study', StudySchema);
