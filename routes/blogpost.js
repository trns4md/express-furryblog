var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blogpost', { title: 'Becky White Blog'});
});

module.exports = router;
