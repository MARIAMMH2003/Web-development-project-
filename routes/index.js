const express = require("express");
const router = express.Router();
const Museum = require('../models/museum'); 
const Comment=require('../models/comment')

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
router.get('/museum/:id', async (req, res) => {
  try {
    const museum = await Museum.findById(req.params.id);
    if (!museum) {
      return res.status(404).json({ message: 'Museum not found' });
    }
    res.render('templateMuseum', { museum });
  } catch (error) {
    console.error('Error fetching museum:', error);
    res.status(500).json({ message: 'Error fetching museum' });
  }
});
router.get('/comments', async (req, res) => {
  try {
      const comments = await Comment.find();
      res.status(200).json(monuments);
  } catch (error) {
      console.error('Error fetching monuments:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});
router.get('/museum/:id/booking', async (req, res) => {
  try {
    const museum = await Museum.findById(req.params.id);
    if (!museum) {
      return res.status(404).json({ message: 'Museum not found' });
    }
    res.render('booking', { museum });
  } catch (error) {
    console.error('Error fetching museum:', error);
    res.status(500).json({ message: 'Error fetching museum' });
  }
});
// new


// new

router.get('/login', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/signup', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});



module.exports = router;
