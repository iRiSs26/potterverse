// models/developer.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  
});

const Developer = mongoose.model('chathere', chatSchema);

module.exports = Developer;
