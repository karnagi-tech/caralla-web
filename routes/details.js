var express = require('express');
var site = require('../services/site');

var router = express.Router();
var carallaSiteService = new site();

/* GET home page. */
router.get('/', function(req, res, next) {
  var renderVars = carallaSiteService.global;
  res.render('details/details', renderVars);
});

module.exports = router;
