var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('This is the express backend server');
});

// post route for contact form
router.post('/contact/api', require('../logic/contactForm').sendEmail);

module.exports = router;
