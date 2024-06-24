const express = require('express');
const router = express.Router();
const Highlight = require('../models/highlight');

router.get('/highlights', async (req, res) => {
    try {
        const highlights = await Highlight.find();
        res.render('highlights', { highlights });
    } catch (err) {
        console.error('Error fetching highlights:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/highlights/edit/:id', async (req, res) => {
    try {
        const highlight = await Highlight.findById(req.params.id);
        if (!highlight) {
            return res.status(404).send('Highlight not found');
        }
        res.render('editHighlight', { highlight });
    } catch (err) {
        console.error('Error fetching highlight:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/highlights/edit/:id', async (req, res) => {
    try {
        const { title, text, imageUrl } = req.body;
        const highlight = await Highlight.findByIdAndUpdate(
            req.params.id,
            { title, text, imageUrl },
            { new: true }
        );
        res.redirect('/highlights');
    } catch (err) {
        console.error('Error updating highlight:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/highlights/delete/:id', async (req, res) => {
    try {
        await Highlight.findByIdAndDelete(req.params.id);
        res.redirect('/highlights');
    } catch (err) {
        console.error('Error deleting highlight:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
