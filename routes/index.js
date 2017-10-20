var express = require('express');
var router = express.Router();
var Tweet = require('../model/Tweet');
var User = require('../model/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twit'});
});

router.post('/posttweet', function(req, res, next){
  console.log(req.body);
  var tweet = req.body;
  tweet.id = Tweet.getLength() + 1,
  tweet.created = new Date();
  Tweet.saveTweet(tweet);
  res.redirect('/');
});

router.get('/gettweets', function(req, res, next){
  res.send({tweets: Tweet.getAllTweets(), success: true});
});

router.post('/login', function(req, res, next){
  var user = req.body;
  var response = User.login(user);
  res.send(response);
});

router.post('/register', function(req, res, next){
  var response = User.createUser(req.body);
  res.send(response);
});

router.get('/tofollow', function(req, res, next){
  res.send({users: User.getAllUsers(), success: true});
});

router.post('/followuser', function(req, res, next){
  if(User.followUser(req.body)){
    res.send({users: User.getAllUsers(), success:true})
  }
});

router.get('/getbyusername/:username', function(req, res, next){
  res.send(User.getByUsername(req.params.username));
});

router.post('/unfollowuser', function(req, res, next){
  if(User.unfollowUser(req.body)){
    res.send({users: User.getAllUsers(), success: true});
  }
});
module.exports = router;
