var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TASchema = new Schema(
  {
    email: String,
    //first name, lastname
    first_name: String
  })

module.exports = mongoose.model('TA', TASchema);
