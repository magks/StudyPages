var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MindMapSchema = new Schema(
  {
    link: String;
  }
);

module.exports = mongoose.model('MindMap', MindMapSchema);
