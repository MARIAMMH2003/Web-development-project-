// models/Highlight.js
const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Highlight', highlightSchema);
