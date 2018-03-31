var Course = require('../models/course');
var Class = require('../models/class');
//var Genre  = require('../models/genre');
//var BookInstance = require('../models/bookinstance');

var async = require('async');
const{ body, validationResult } = require('express-validator/check');
const{ sanitizeBody } = require('express-validator/filter');

// Catalog index(home page)
exports.index = function(req, res) {
 // res.send('notimplemented home page viacourse');
//};

 async.parallel({
      course_count: function(callback) {
           Course.count(callback);
       },
       class_count: function(callback) {
           Class.count(callback);
       }

 }, function(err, results) {
   res.render('index', { title: 'My Courses Home', error: err, data: results });
 });
};

// Display list of all courses.
exports.course_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Course list');
};

// Display detail page for a specific Course.
exports.course_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Course detail: ' + req.params.id);
};

//  Display Course create form on GET.
exports.course_create_get = function(req, res, next) {
  res.render('gendre_form', {title: 'Create Genre'})
};

// Handle Course create on POST.
exports.course_create_post = [

    // Validate that the department name field is not empty.
    body('dept_name', 'Department tag required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('dept_name').trim().escape(),

    //Validate that the course tag field is not empty
    body('course_tag', 'Course tag  required').isLength({min: 1}).trim(),

    //Sanitize (trim and escape) the course tag field.
    sanitizeBody('course_tag').trim().escape(),

    // Process request after validation and sanitization.

(req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var course = new Course(
          {
            units: req.body.units,
            dept_name: req.body.dept_name,
            course_tag: req.body.course_tag,
            title: req.body.title,
            description: req.body.description,
            prerequisites: req.body.prerequisites
          }

        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('course_form', { title: 'Create Course', course: course, errors: errors.array()});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Course with same name already exists.
            Course.findOne({ 'dept_name': req.body.dept_name })
                .exec( function(err, found_course) {
                     if (err) { return next(err); }

                     if (found_course) {
                        // Course exists, redirect to its detail page.
                       res.redirect(found_course.url);
                       return null;
                     }
                     else {

                         course.save(function (err) {
                           if (err) { return next(err); }
                           // Course saved. Redirect to course detail page.
                           res.redirect(course.url);
                           return null;
                         });
                     }
                  return null;
                 });
        }
    }
];

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
