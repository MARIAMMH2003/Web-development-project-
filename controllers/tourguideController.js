const TourGuide = require('../models/tourGuide');

// Get all tour guides
exports.getTourGuides = async (req, res) => {
  const tourGuides = await TourGuide.find();
  res.render('index', { tourGuides });
};

// Create a new tour guide
exports.createTourGuide = async (req, res) => {
  const tourGuide = new TourGuide(req.body);
  await tourGuide.save();
  res.redirect('/tourGuides');
};

// Update a tour guide
exports.updateTourGuide = async (req, res) => {
  await TourGuide.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/tourGuides');
};

// Delete a tour guide
exports.deleteTourGuide = async (req, res) => {
  await TourGuide.findByIdAndDelete(req.params.id);
  res.redirect('/tourGuides');
};
