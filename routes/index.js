const express = require("express");
const router = express.Router();

// router.get("/", (req, res)=> {
//   res.render('index', { title:"home page" });
// });
router.get('/', (req, res) => {
  console.log("OK")
  res.render('index', { title: 'Home Page' });
});


router.get('/login', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});

// Route for signup page
router.get('/signup', (req, res) => {
    res.render('signup', { user: (req.session.user === undefined ? "" : req.session.user) });
});

// Other routes go here

module.exports = router;


module.exports = router;