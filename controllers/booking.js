const Booking = require('../models/booking');

const createBooking = async (req, res) => {
    const { name, email, destination, departureDate, returnTime } = req.body;

    try {
        const newBooking = new Booking({
            name,
            email,
            destination,
            departureDate,
            returnTime,
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking saved successfully' });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ error: 'Failed to save booking' });
    }
};

module.exports = {
    createBooking,
};
