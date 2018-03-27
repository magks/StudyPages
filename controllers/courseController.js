var Course = require('../models/course');

// Display list of all Courses.
exports.course_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Course list');
};

// Display detail page for a specific Course.
exports.course_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Course detail: ' + req.params.id);
};

// Display Course create form on GET.
exports.course_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course create GET');
};

// Handle Course create on POST.
exports.course_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course create POST');
};

// Display Course delete form on GET.
exports.course_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course delete GET');
};

// Handle Course delete on POST.
exports.course_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course delete POST');
};

// Display Course update form on GET.
exports.course_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course update GET');
};

// Handle Course update on POST.
exports.course_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course update POST');
};
