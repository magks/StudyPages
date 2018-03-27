var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema(
  {
    building: String,
    room: String
    //map
  }
);

module.exports = mongoose.model('Place', PlaceSchema);
