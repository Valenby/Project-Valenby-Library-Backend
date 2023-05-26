const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;