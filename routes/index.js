const express = require("express");
const router = express.Router();
const Museum = require('../models/museum'); 

router.get('/', async (req, res) => {
  console.log("Homepage route hit");
  try {
    const museums = await Museum.find(); // Fetch museums from MongoDB
    res.render('index', { museums, title: 'Home Page' }); // Pass museums data to the 'index' template
  } catch (error) {
    console.error('Error fetching museums:', error);
    res.status(500).json({ message: 'Error fetching museums' }); // Respond with an error JSON if fetching museums fails
  }
});
router.get('/map-tetsing', async (req, res) => {
  console.log("Homepage route hit");
  try {
    const museums = await Museum.find(); // Fetch museums from MongoDB
    res.render('map-tetsing', { museums, title: 'Map Page' }); // Pass museums data to the 'index' template
  } catch (error) {
    console.error('Error fetching museums:', error);
    res.status(500).json({ message: 'Error fetching museums' }); // Respond with an error JSON if fetching museums fails
  }
});

router.get('/login', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/signup', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/BritishMuseum', (req, res) => {
  res.render('BritishMuseum');
});

router.get('/KarnakTemple', (req, res) => {
  res.render('KarnakTemple');
});

router.get('/AlexandriaNationalMuseum', (req, res) => {
  res.render('AlexandriaNationalMuseum');
});

router.get('/EgyptianMuseumInCairo', (req, res) => {
  res.render('EgyptianMuseumInCairo');
});

router.get('/SmithsonianMuseum', (req, res) => {
  res.render('SmithsonianMuseum');
});

router.get('/TheCopticMuseum', (req, res) => {
  res.render('TheCopticMuseum');
});

router.get('/MuseumofIslamicArtInCairo', (req, res) => {
  res.render('MuseumofIslamicArtInCairo');
});

router.get('/Greco-RomanMuseumOfAlexandria', (req, res) => {
  res.render('Greco-RomanMuseumOfAlexandria');
});

router.get('/LuxorMuseum', (req, res) => {
  res.render('LuxorMuseum');
});

module.exports = router;
