var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* Get About page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* Get Project page*/
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'About My Projects' });
});
/* Get Contact  page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me ' });
});




module.exports = router;
