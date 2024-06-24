const express = require('express');
const router = express.Router();
const Highlight = require('../models/highlight');

// Endpoint to add a new highlight
router.post('/add', async (req, res) => {
  const { image, title, text } = req.body;

  try {
    const newHighlight = new Highlight({ image, title, text });
    await newHighlight.save();
    res.status(201).json({ message: 'Highlight added successfully', highlight: newHighlight });
  } catch (error) {
    console.error('Error adding highlight:', error);
    res.status(500).json({ error: 'Failed to add highlight' });
  }
});

module.exports = router;
// Get all highlights
router.get('/', async (req, res) => {
    try {
      const highlights = await Highlight.find();
      res.status(200).json(highlights);
    } catch (error) {
      console.error('Error fetching highlights:', error);
      res.status(500).json({ error: 'Failed to fetch highlights' });
    }
  });
  
  // Get a specific highlight by ID
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const highlight = await Highlight.findById(id);
      if (!highlight) {
        return res.status(404).json({ error: 'Highlight not found' });
      }
      res.status(200).json(highlight);
    } catch (error) {
      console.error('Error fetching highlight:', error);
      res.status(500).json({ error: 'Failed to fetch highlight' });
    }
  });
  
  // Update a highlight by ID
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { image, title, text } = req.body;
  
    try {
      const updatedHighlight = await Highlight.findByIdAndUpdate(id, { image, title, text }, { new: true });
      if (!updatedHighlight) {
        return res.status(404).json({ error: 'Highlight not found' });
      }
      res.status(200).json({ message: 'Highlight updated successfully', highlight: updatedHighlight });
    } catch (error) {
      console.error('Error updating highlight:', error);
      res.status(500).json({ error: 'Failed to update highlight' });
    }
  });
  
  // Delete a highlight by ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedHighlight = await Highlight.findByIdAndDelete(id);
      if (!deletedHighlight) {
        return res.status(404).json({ error: 'Highlight not found' });
      }
      res.status(200).json({ message: 'Highlight deleted successfully' });
    } catch (error) {
      console.error('Error deleting highlight:', error);
      res.status(500).json({ error: 'Failed to delete highlight' });
    }
  });
  