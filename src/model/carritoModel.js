const mongoose = require('mongoose');

const bookProductModel = require('./productModel')

const carritoSchema = mongoose.Schema({
    items: [{
        book: {
            type: bookProductModel,
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