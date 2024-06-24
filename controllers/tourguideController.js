const TourGuide = require('../models/tourguide');

const createTourGuide = async (req, res) => {
    const { name, profession, about, image, socialMedia } = req.body;

    try {
        const newTourGuide = new TourGuide({
            name,
            profession,
            about,
            image,
            socialMedia,
        });

        await newTourGuide.save();
        res.status(201).json({ message: 'Tour guide profile updated!' });
    } catch (error) {
        console.error('Error saving tour guide:', error);
        res.status(500).json({ error: 'Failed to save tour guide' });
    }
};

module.exports = {
    createTourGuide,
};
