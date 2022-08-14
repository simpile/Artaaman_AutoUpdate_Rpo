const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    src: String,
    alt: String,
    
});

const imgModel = mongoose.model('newImg', imageSchema);

module.exports = imgModel;
