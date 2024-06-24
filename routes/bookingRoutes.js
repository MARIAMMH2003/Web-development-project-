const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /bookings
router.post('/booking', bookingController.createBooking);

module.exports = router;
