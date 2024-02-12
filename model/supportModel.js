// models/supportModel.js
const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  method: {
    type: String,
    enum: ['call', 'message', 'text', 'email'],
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Support = mongoose.model('Support', supportSchema);

module.exports = Support;
