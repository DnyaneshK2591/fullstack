const mongoose = require('mongoose');
const mongoCollection = 'posts';


const postSchema = new mongoose.Schema({
    heading: String,
    subheading: String,
    description: String,
    image: String,
    author: String,
    postedon: String,
  });

  module.exports = mongoose.model(mongoCollection, postSchema);