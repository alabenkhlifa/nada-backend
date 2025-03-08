// config/db.js
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Adjust path as needed

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/medinaLab";

// Préparer le changement à venir dans Mongoose 7
mongoose.set('strictQuery', true);  // ou false, selon ta préférence

const connectDB = async () => {
  try {
    console.log('Attempting to connect with URI:', MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
