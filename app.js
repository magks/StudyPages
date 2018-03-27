var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalog = require('./routes/catalog');  //Import routes for "catalog" area of site

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Database setup
//Import the mongoose module
 var mongoose = require('mongoose');
//Set up mongoose connection
 var mongoDB = 'mongodb://magks:Cr0wnCaw@ds123499.mlab.com:23499/study_pages';
 mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
 mongoose.Promise = global.Promise;
 mongoose.connect(mongoDB);

//Get the default connection
  var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//END Database Setup

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalog);

// Router tutorial:
//wiki.js
var wiki = require('./wiki.js')
app.use('/wiki', wiki)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;