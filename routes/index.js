const express = require('express');
const router = express.Router();

router.post('/contact/api', require('../logic/contactForm').sendEmail);

module.exports = router;