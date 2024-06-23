const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: String, required: true },
    returnTime: { type: String, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
