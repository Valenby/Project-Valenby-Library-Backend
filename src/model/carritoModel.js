const mongoose = require('mongoose');

// const { bookSchema } = require('./productModel')

const carritoSchema = mongoose.Schema({
    items: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book',
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