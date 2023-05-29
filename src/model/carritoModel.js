const mongoose = require('mongoose');

const bookProductSchema = require('./productModel')

const carritoSchema = mongoose.Schema({
    items: [{
        book: {
            type: bookProductSchema,
            required: true
        },
        quantity: {
            type:Number,
            required: true,
        }
    }]
});

const carritoModel = mongoose.model('carrito', carritoSchema);

module.exports = carritoModel;