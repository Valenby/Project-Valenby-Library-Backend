//crud products books
const {bookProductModel} = require('../model');

// lista book product.
exports.getBookProduct = async (_,res) => {
    console.log(' -> method viewAll');
    const result = await bookProductModel.find();
    res.json(result);

};


exports.createBookProduct = async (req, res) => {
    console.log('-> method createProduct');

    const newBookProduct = {
        category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        pages: req.body.pages,
        stock: req.body.stock,
        price: req.body.price
    }

    if (req.body.tags){
        newBookProduct.tags = req.body.tags
    }

    const result = await bookProductModel.create(newBookProduct);

    res.json(result)
}
