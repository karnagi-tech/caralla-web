var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var about = require('./routes/about');
var contact = require('./routes/contact');
var guide = require('./routes/guide');
var howitworks = require('./routes/howitworks');
var benefits = require('./routes/benefits');
var details = require('./routes/details');
var sellcar = require('./routes/sellcar');
var buycar = require('./routes/buycar');
var profile = require('./routes/profile');

var app = express();  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var static_options = {
  dotfiles: 'ignore',
  etag: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-caralla-timestamp', Date.now())
  }
}

app.use('/static', express.static(path.join(__dirname, 'public'), static_options));

app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/guide', guide);
app.use('/howitworks', howitworks);
app.use('/benefits', benefits);
app.use('/details', details);
app.use('/sellcar', sellcar);
app.use('/buycar', buycar);
app.use('/profile', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
