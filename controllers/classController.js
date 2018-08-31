var Class = require('../models/class');

//class home page
exports.index = function(req, res) {
  res.send('NOT IMPLEMENTED: Class Home Page');
};

// Display list of all Classs.
exports.class_list = function(req, res, next) {
  Class.find({}, 'course study')
    .populate('Study')
    .exec(function (err, list_classes){
      if (err) { return next(err); }
      // Successful so render
      res.render('class_list', {title: 'Class List',
                                class_list: list_classes});
    });
};




// Display detail page for a specific Class.
exports.class_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Class detail: ' + req.params.id);
};

// Display Class create form on GET.
exports.class_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Class create GET');
};

// Handle Class create on POST.
exports.class_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Class create POST');
};

// Display Class delete form on GET.
exports.class_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Class delete GET');
};

// Handle Class delete on POST.
exports.class_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Class delete POST');
};

// Display Class update form on GET.
exports.class_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Class update GET');
};

// Handle Class update on POST.
exports.class_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Class update POST');
};
