//esquema products.
const mongoose = require('mongoose');

//enumeracion de categorias
const CategoryEnum = Object.freeze({
    FICTION:"ficcion",
    NON_FICTION:"no_ficcion",
    POETRY:"poesia",
    LITERATURE:"literatura"
});

const bookSchema = mongoose.Schema({
    category:{
        type: String,
        enum: Object.values(CategoryEnum),
        required: true
    },
    tags: {
        type:[String],
        required: false
        }, 
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
   pages: {
    type: Number,
    required: true
   },
   stock: {
    type: Number,
    required: true,
   },
   price: {
    type: Number,
    required: true
   }
});

const bookProductModel = mongoose.model("book", bookSchema);

module.exports = {
    bookProductModel,
    bookSchema
    };

