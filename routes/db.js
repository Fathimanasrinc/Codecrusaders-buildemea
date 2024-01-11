const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://127.0.0.1:27017/crud'; // Replace with your MongoDB connection string and database name

// Connect to MongoDB
mongoose.connect(mongoURI);

// Get the default connection
const db = mongoose.connection;

// Event handling for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB successfully');
});

// Event handling for connection error
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Event handling for disconnected
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close the Mongoose connection on Node.js application termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});
const userSchema = new mongoose.Schema({
  Name:String,
  password:Number
});
const userModel = new mongoose.model("students",userSchema)
const user = new userModel({
  username:"nasrin",
  password:1212
});
user.save();
