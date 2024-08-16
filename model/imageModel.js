// imageModel.js 
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: String,
    description: String,
    src: String,
    category: String,  // e.g., 'products', 'pieces', 'maps', etc.
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', imageSchema);
