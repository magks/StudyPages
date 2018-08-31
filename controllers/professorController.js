/* Professor Controller */

var Professor = require('../models/professor');

//professor home page
exports.index = function(req, res) {
  res.send('NOT IMPLEMENTED: Professor Home Page');
};

// Display list of all Professors.
exports.professor_list = function(req, res, next) {
  Professor.find({}, 'first_name last_name')
    .populate('Course')
    .exec(function (err, list_professors){
      if (err) { return next(err); }
      // Successful so render
      res.render('professor_list', {title: 'Professor List',
                                professor_list: list_professors});
    });
};



// Display detail page for a specific Professor.
exports.professor_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor detail: ' + req.params.id);
};

// Display Professor create form on GET.
exports.professor_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor create GET');
};

// Handle Professor create on POST.
exports.professor_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor create POST');
};

// Display Professor delete form on GET.
exports.professor_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor delete GET');
};

// Handle Professor delete on POST.
exports.professor_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor delete POST');
};

// Display Professor update form on GET.
exports.professor_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor update GET');
};

// Handle Professor update on POST.
exports.professor_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Professor update POST');
};
