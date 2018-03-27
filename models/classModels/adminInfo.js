var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminInfo = new Schema(
  {
    syllabus: {type: Schema.ObjectId, ref: "Syllabus"},
    professor: {type: Schema.ObjectId, ref: "Professor"},
    teach_assistants: [{type: Schema.ObjectId, ref: "TA"}]
  }
);

// Virtual for adminInfo's URL
AdminInfoSchema
  .virtual('url')
  .get(function () {
    return '/catalog/adminInfo/' + this._id;
  });

//Export model
module.exports = mongoose.model('AdminInfo', AdminInfoSchema);
