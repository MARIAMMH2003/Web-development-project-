const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonumentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const MuseumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    monuments: [MonumentSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    },
    __v: {
        type: Number,
        select: false 
    }
});

const Museum = mongoose.model('Museum', MuseumSchema);

module.exports = Museum;
