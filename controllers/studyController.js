var Study = require('../models/study');

//study home page
exports.index = function(req, res) {
  res.send('NOT IMPLEMENTED: Study Home Page');
};

// Display list of all Studys.
exports.study_list = function(req, res, next) {

    Study.find()
      .populate('Class')
      .exec(function (err, list_studies) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('study_list', { title: 'Study List', study_list: list_studies });
      });

  };

// Display detail page for a specific Study.
exports.study_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Study detail: ' + req.params.id);
};

// Display Study create form on GET.
exports.study_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Study create GET');
};

// Handle Study create on POST.
exports.study_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Study create POST');
};

// Display Study delete form on GET.
exports.study_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Study delete GET');
};

// Handle Study delete on POST.
exports.study_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Study delete POST');
};

// Display Study update form on GET.
exports.study_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Study update GET');
};

// Handle Study update on POST.
exports.study_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Study update POST');
};
