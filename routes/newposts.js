var express = require('express');
var router = express.Router();
var repo = require('../models/postRepository');



router.get('/', function(req, res, next) {

  res.render('newposts', { title: "New Posts"});
});

router.post('/', function(req, res, next){
  var newposts = {};

  newposts.id = req.body.id;
  newposts.title = req.body.title;
  newposts.author = {};
  newposts.firstName = req.body.firstName;
  newposts.lastName = req.body.lastName;
  newposts.email = req.body.email;
  newposts.pubDate = req.body.pubDate;
  newposts.content =req.body.content;

  repo.addPost(newposts);

  res.redirect('/');

  
  
  
  //res.send("DONE! Received:" + req.body.id);
});


module.exports = router;