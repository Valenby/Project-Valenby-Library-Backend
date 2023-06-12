const mongoose = require('mongoose');

const { bookSchema } = require('./productModel')

const compraSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    direccionEnvio: {
        type: String,
        required: true
    },
    carrito: {
        items: [{
            bookId: {
                type: bookSchema,
                required: true
            },
            quantity: {
                type:Number,
                required: true,
            }
        }]
    }
});

const compraModel = mongoose.model('compra', compraSchema);

module.exports = compraModel;