var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const { check,validationResult } = require('express-validator');
const { response } = require('../app');

// MongoDB connection URI
const mongoURI = 'mongodb://127.0.0.1:27017/crud'; // Replace with your MongoDB connection string and database name

// Connect to MongoDB
mongoose.connect(mongoURI);

// Get the default connection
const db = mongoose.connection;
const userSchema = new mongoose.Schema({
  Name:String,
  password:Number
});




/* GET home page. */
router.get('/', function(req, res, next ) {
  res.render('index');
});
router.get('/about', function(req, res, next ) {
  res.render('about');
});

router.get('/signin_student', function(req, res, next ) {
  res.render('signin_student');
});

router.post('/student',function(req, res, next ) {
 
  res.render('student');
});
router.get('/signup_student', function(req, res, next ) {
  res.render('signup_student');
});
module.exports = router;
