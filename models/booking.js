const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
