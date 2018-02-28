var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:god@ds249818.mlab.com:49818/userauth');

var db = mongoose.connection;


//User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    email: String,
    name: String,
    mail: Boolean,
});

module.exports = mongoose.model('User', UserSchema);