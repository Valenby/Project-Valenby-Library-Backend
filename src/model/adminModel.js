const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin'],
        default: 'admin'
    }
});

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;