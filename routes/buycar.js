var express = require('express');
var site = require('../services/site');

var router = express.Router();
var carallaSiteService = new site();

/* GET home page. */

router.post('/result', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  res.render('buycar/searchresult', renderVars);
});

router.get('/result', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  res.render('buycar/searchresult', renderVars);
});
 

router.get('/', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  res.render('buycar/buycar', renderVars);
});

module.exports = router;
