const express = require('express');
const { addMuseum, addMonument, upload,getAllMuseums } = require('../controllers/Museum');
const router = express.Router();
const Museum = require('../models/museum'); 

router.get('/', async (req, res) => {
  try {
    const museums = await Museum.find(); // Fetch museums from MongoDB
    res.render('museums', { museums }); // Pass museums data to the 'museums' template
  } catch (error) {
    console.error('Error fetching museums:', error);
    res.status(500).json({ message: 'Error fetching museums' });
  }
});

router.get('/add', (req, res) => {
  res.render("newMuseum");
});

router.get('/edit/:id', (req, res) => {
  console.log(req.params.id);
  // TODO: Fetch and render museum data by ID
  res.render("museums");
});

router.get('/allMuseums', async (req, res) => {
  try {
    const museums = await Museum.find();
    res.json(museums);
  } catch (error) {
    console.error('Error fetching all museums:', error);
    res.status(500).json({ message: 'Error fetching all museums' });
  }
});




router.post('/add', addMuseum);
router.post('/addmonument', addMonument);
router.get('/allMuseums', getAllMuseums);


module.exports = router;
