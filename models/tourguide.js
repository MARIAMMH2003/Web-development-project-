const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourGuideSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    // socialMedia: {
    //     facebook: String,
    //     twitter: String,
    //     instagram: String,
    //     whatsapp: String
    // }
    facebook: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    }
});

const TourGuide = mongoose.model('tourguides', tourGuideSchema);
module.exports = tourguide;
