var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Becky White'});
});

module.exports = router;