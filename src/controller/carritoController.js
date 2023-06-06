const {carritoModel} = require('../model');

// list book id
exports.getCarrito = async (req, res) => {
    console.log('-> method viewIdCarrito');
    const carrito = await carritoModel.findById({'_id': req.params.id}).populate('items.bookId')
    console.log(carrito);

    if (!carrito){
        res.status(404).send('carrito list not found ')
        return
    }
    res.json(carrito);
};

//create carrito
exports.createCarrito = async (req, res) => {
    console.log('-> method creacteCarrito')

    const newCarrito = {
        items: [{
            bookId:  req.body.bookId,
            quantity:  req.body.quantity
        }
    ]}

    const result = await carritoModel.create(newCarrito);

    res.json(result)
};