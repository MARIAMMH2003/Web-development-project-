const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    monuments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Monument' }],

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
