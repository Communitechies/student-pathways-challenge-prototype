const mongoose = require('mongoose');

//const dbURI = 'mongodb://communitech:LMkwBuaJt4Kk9cdo@spcmean.cleverhost.ca/communitech';
const dbURI = 'mongodb://localhost/communitech';

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// Initializes all schemas and models
require('./users');
