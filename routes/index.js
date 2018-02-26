var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('This is the express backend server');
});

// Post for contact form
router.route('/contact/api')
    .get(function(req, res, next) {
        res.send('contact/api route');
    })
    .post(require('../logic/contactForm').sendEmail)

module.exports = router;
