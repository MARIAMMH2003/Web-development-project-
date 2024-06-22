const mongoose = require('mongoose');

const tourGuideSchema = new mongoose.Schema({
  name: String,
  profession: String,
  about: String,
  image: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    whatsapp: String
  },
  rating: Number
});

module.exports = mongoose.model('TourGuide', tourGuideSchema);
