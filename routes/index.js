var express = require('express');
var router = express.Router();
var ExpressValidator = require('express-validator');
router.use(ExpressValidator());

/* This is just here to check if the backend is running */
router.get('/', function(req, res, next) {
    res.send('This is the express backend server');
});

// post route for contact form
router.post('/contact/api', require('../logic/contactForm').sendEmail);

// post route for registering users
router.post('/users/register', require('../logic/register').register);
module.exports = router;
