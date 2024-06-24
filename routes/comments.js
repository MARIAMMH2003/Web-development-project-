// routes/comments.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');
const Monument = require('../models/monument');

// Add a new comment
router.post('/', async (req, res) => {
  const { content, rating, username, monumentId } = req.body;

  try {
    const monument = await Monument.findById(monumentId);
    if (!monument) {
      return res.status(404).json({ error: 'Monument not found' });
    }

    const comment = new Comment({ content, rating, username, monument: monumentId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
