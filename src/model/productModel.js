//esquema products.
const mongoose = require('mongoose');

//enumeracion de categorias
const CategoryEnum = Object.freeze({
    FICTION:"ficcion",
    NON_FICTION:"no_ficcion",
    POETRY:"poesia",
    LITERATURE:"literatura"
});

const bookProductSchema = mongoose.Schema({
    category:{
        type: String,
        Enum: Object.values(CategoryEnum),
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

const bookProductModel = mongoose.model("books products", bookProductSchema);

module.exports = {
    bookProductModel,
    bookProductSchema
    };

