const express = require('express');
const router = express.Router();
const path = require('path');  // Add this line

// Route to serve Alexandria National Museum HTML page
router.get('/LuxorMuseum', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'LuxorMuseum.html'));
});

module.exports = router;
