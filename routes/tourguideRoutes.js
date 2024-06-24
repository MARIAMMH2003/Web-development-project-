const express = require('express');
const router = express.Router();
const tourGuideController = require('../controllers/tourguideController');
const TourGuide = require('../models/tourguide');

// POST /tourGuides
router.post('/tourGuides', async (req, res) => {
    const { name, profession, about, image, socialMedia, rating } = req.body;
    const newTourGuide = new TourGuide({
        name,
        profession,
        about,
        image,
        socialMedia,
        rating
    });

    try {
        await newTourGuide.save();
        res.redirect('/tourGuides');
    } catch (error) {
        res.status(500).send('Error saving tour guide');
    }
});

// Route to render the tour guides page
router.get('/tourGuides', async (req, res) => {
    try {
        const tourGuides = await TourGuide.find();
        res.render('tourGuides', { tourGuides });
    } catch (error) {
        res.status(500).send('Error fetching tour guides');
    }
});

// Route to handle deleting a tour guide
router.post('/delete/:id', async (req, res) => {
    try {
        await TourGuide.findByIdAndDelete(req.params.id);
        res.redirect('/tourGuides');
    } catch (error) {
        res.status(500).send('Error deleting tour guide');
    }
});

// Route to handle editing a tour guide (form submission handling not shown here)
router.post('/update/:id', async (req, res) => {
    try {
        const { name, profession, about, image, socialMedia, rating } = req.body;
        await TourGuide.findByIdAndUpdate(req.params.id, {
            name,
            profession,
            about,
            image,
            socialMedia,
            rating
        });
        res.redirect('/tourGuides');
    } catch (error) {
        res.status(500).send('Error updating tour guide');
    }
});

module.exports = router;
