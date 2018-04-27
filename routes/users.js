const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:"Failed to register user"});
        } else {
            res.json({success: true, msg:"User registered"});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err)throw err;
        if(!user){
            return res.json({success:false, msg:"User not found"});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' +token,
                    user: {
                        id: user._id,
                        email: user.email
                    } 
                });
            } else {
                return res.json({success:false, msg: 'Wrong password'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

// This gets all users for the admin page
router.get('/getAllUsers', function(req, res, next) {
    let userList = [];
    User.find({}, function(err, users) {
        if(err) throw err;
        else {
            users.map(function(user) {
                userList.push(user);
            });
            res.json(userList);
        }
    })
});


module.exports = router;