var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TextbookSchema(
  {
    primary: String,
    supplementary: [String]
  }
);

// Virtual for adminInfo's URL
TextbookSchema
  .virtual('url')
  .get(function () {
    return '/catalog/textbook/' + this._id;
  });

//Export model
module.exports = mongoose.model('Textbook', TextbookSchema);
