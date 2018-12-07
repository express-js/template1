var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET elements page */
router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'set title' });
});

/* GET forgot password page */
router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'set title' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'set title' });
});

/* GET profile page */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'set title' });
});

/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'set title' });
});

/* GET reports page */
router.get('/reports', function(req, res, next) {
  res.render('reports', { title: 'set title' });
});



/* GET wallet page*/
router.get('/wallet', function(req, res, next) {
  res.render('wallet', { title: 'My Wallet' });
});

/* 404 page */


/* */
module.exports = router;
