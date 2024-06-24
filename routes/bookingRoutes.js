// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.post('/book', async (req, res) => {
    const { name, email, destination, departureDate, returnDate, price } = req.body;

    // Validate the form data
    if (!name || !email || !destination || !departureDate || !returnDate || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newBooking = new Booking({
            name,
            email,
            destination,
            departureDate,
            returnDate,
            price
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

module.exports = router;
