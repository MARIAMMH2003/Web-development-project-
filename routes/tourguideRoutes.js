const express = require('express');
const router = express.Router();
const tourGuideController = require('../controllers/tourGuideController');

router.get('/', tourGuideController.getTourGuides);
router.post('/', tourGuideController.createTourGuide);
router.post('/update/:id', tourGuideController.updateTourGuide);
router.post('/delete/:id', tourGuideController.deleteTourGuide);

module.exports = router;
