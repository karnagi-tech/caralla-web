var express = require('express');
var site = require('../services/site');

var router = express.Router();
var carallaSiteService = new site();

/* GET home page. */

router.get('/signin', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  renderVars.moduletitle = 'Sign In';
  renderVars.moduledescription = 'Sign in to get more benefit';
  renderVars.moduleurl = 'signin';
  res.render('profile/profile', renderVars);
});

router.get('/register', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  renderVars.moduletitle = 'Register';
  renderVars.moduledescription = 'Register and get ready';
  renderVars.moduleurl = 'register';
  res.render('profile/profile', renderVars);
});

router.get('/forgotpassword', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  renderVars.moduletitle = 'Forgot Password';
  renderVars.moduledescription = 'Forgot your password? Do not worry, we will help you';
  renderVars.moduleurl = 'forgotpassword';
  res.render('profile/profile', renderVars);
});

module.exports = router;
