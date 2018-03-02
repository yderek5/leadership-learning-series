var express = require('express');
var router = express.Router();
var ExpressValidator = require('express-validator');
router.use(ExpressValidator());

/* This Serves our React app */


// post route for contact form
router.post('/contact/api', require('../logic/contactForm').sendEmail);

// post route for registering users
router.post('/users/register', require('../logic/register').register);
module.exports = router;
