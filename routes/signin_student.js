var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://127.0.0.1:27017/crud'; // Replace with your MongoDB connection string and database name


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signin');
  
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
  
});


module.exports = router;