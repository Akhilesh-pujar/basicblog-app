// server/config/db.js
const mongoose = require('mongoose');
const config = require('./config');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.database.url);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process on database connection error
  }
};

module.exports = connectToDatabase;
