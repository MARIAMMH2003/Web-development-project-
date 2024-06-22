const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/login', (req, res) => {
    res.render('login', { user: (req.session.user === undefined ? "" : req.session.user) });
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
