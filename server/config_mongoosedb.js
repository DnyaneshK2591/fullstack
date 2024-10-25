const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017';
const mongoDb = 'fullstack';

mongoose.connect(mongoUrl + '/' + mongoDb);