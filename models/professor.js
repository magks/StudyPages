/* Professor Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfessorSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    course: [{type:Schema.ObjectId, ref:"Course"}],
    email: String
    //professor: {type: Schema.ObjectId, ref: "Professor"},
  }
);

// Virtual for professor info
ProfessorSchema
  .virtual('full_name')
  .get(function () {
    return this.first_name + ' ' + this.last_name;
  });

// Virtual for professor's URL
ProfessorSchema
  .virtual('url')
  .get(function () {
    return '/catalog/professor/' + this._id;
  });

//Export model
module.exports = mongoose.model('Professor', ProfessorSchema);
