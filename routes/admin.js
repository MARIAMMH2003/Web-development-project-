const express = require("express");
var bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const MuseumRouter = require('./museums');


const Admin = require("../controllers/Admin");

// check if admin
router.use((req, res, next) => {
    if (req.session.user !== undefined && req.session.user.usertype === 'admin') {
        next();
    }
    else {
        res.render('err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
    }
});

router.use('/museums', MuseumRouter);


router.get('/', (req, res) => {
    res.render('tourifyad');
});

router.get("/viewAll", Admin.GetAllUsers);
router.get("/emp/:id", Admin.GetUser);
router.get("/toAdmin/:id", Admin.toAdmin);
router.get("/toClient/:id", Admin.toClient);
router.get("/delete/:img/:id", Admin.DeleteUser);

module.exports = router;