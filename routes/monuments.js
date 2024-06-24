// routes/monuments.js

const express = require('express');
const router = express.Router();
const monumentsController = require('../controllers/Monument');

// POST /monuments route to add a new monument
router.post('/', monumentsController.addMonument);

module.exports = router;
