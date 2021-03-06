var express = require('express');
var router = express.Router();

// Require controller modules.
var course_controller = require('../controllers/courseController');
var class_controller = require('../controllers/classController');
var study_controller = require('../controllers/studyController');
var professor_controller = require('../controllers/professorController');
/// COURSE ROUTES ///

// GET catalog home page.
router.get('/', course_controller.index); // This actually maps to /catalog/ because we import the route with /catalog prefix

// GET request for creating a Course. NOTE This must come before routes that display Course (uses id).
router.get('/course/create', course_controller.course_create_get);

// POST request for creating Course.
router.post('/course/create', course_controller.course_create_post);

// GET request to delete Course.
router.get('/course/:id/delete', course_controller.course_delete_get);

// POST request to delete Course.
router.post('/course/:id/delete', course_controller.course_delete_post);

// GET request to update Course.
router.get('/course/:id/update', course_controller.course_update_get);

// POST request to update Course.
router.post('/course/:id/update', course_controller.course_update_post);

// GET request for one Course.
router.get('/course/:id', course_controller.course_detail);

// GET request for list of all Course items.
router.get('/courses', course_controller.course_list);

/// CLASS ROUTES ///


// GET request for creating Class. NOTE This must come before route for id (i.e. display class).
router.get('/class/create', class_controller.class_create_get);

// POST request for creating Class.
router.post('/class/create', class_controller.class_create_post);

// GET request to delete Class.
router.get('/class/:id/delete', class_controller.class_delete_get);

// POST request to delete Class.
router.post('/class/:id/delete', class_controller.class_delete_post);

// GET request to update Class.
router.get('/class/:id/update', class_controller.class_update_get);

// POST request to update Class.
router.post('/class/:id/update', class_controller.class_update_post);

// GET request for one Class.
router.get('/class/:id', class_controller.class_detail);

// GET request for list of all Classes.
router.get('/classes', class_controller.class_list);

/// STUDY ROUTES ///

// GET request for creating Study. NOTE This must come before route for id (i.e. display study).
router.get('/study/create', study_controller.study_create_get);

// POST request for creating Study.
router.post('/study/create', study_controller.study_create_post);

// GET request to delete Study.
router.get('/study/:id/delete', study_controller.study_delete_get);

// POST request to delete Study.
router.post('/study/:id/delete', study_controller.study_delete_post);

// GET request to update Study.
router.get('/study/:id/update', study_controller.study_update_get);

// POST request to update Study.
router.post('/study/:id/update', study_controller.study_update_post);

// GET request for one Study.
router.get('/study/:id', study_controller.study_detail);

// GET request for list of all Studies.
router.get('/studies', study_controller.study_list);

/// PROFESSOR ROUTES ///

// GET request for creating Professor. NOTE This must come before route for id (i.e. display professor).
router.get('/professor/create', professor_controller.professor_create_get);

// POST request for creating Professor.
router.post('/professor/create', professor_controller.professor_create_post);

// GET request to delete Professor.
router.get('/professor/:id/delete', professor_controller.professor_delete_get);

// POST request to delete Professor.
router.post('/professor/:id/delete', professor_controller.professor_delete_post);

// GET request to update Professor.
router.get('/professor/:id/update', professor_controller.professor_update_get);

// POST request to update Professor.
router.post('/professor/:id/update', professor_controller.professor_update_post);

// GET request for one Professor.
router.get('/professor/:id', professor_controller.professor_detail);

// GET request for list of all Studies.
router.get('/professors', professor_controller.professor_list);


module.exports = router;
