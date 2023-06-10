const { ObjectId } = require('mongodb');

const {carritoModel} = require('../model');

// list book id
exports.getCarrito = async (req, res) => {
    console.log('-> method viewIdCarrito');
    const carrito = await carritoModel.findById({'_id': req.params.id}).populate('items.bookId')
    console.log(carrito);

    if (!carrito){
        res.status(404).send('carrito not found ')
        return
    }
    res.json(carrito);
};

//create carrito
exports.createCarrito = async (req, res) => {
    console.log('-> method creacteCarrito')

    if (!ObjectId.isValid(req.body.bookId)){
        res.status(401).send('invalid id')
        return
    } 

    const newCarrito = {
        items: [{
            bookId:  req.body.bookId,
            quantity:  req.body.quantity
        }
    ]}

    const result = await carritoModel.create(newCarrito);

    res.json(result)
};

//agregar mas libros al carrito
exports.addBookAlCarrito = async (req, res) => {
    try {
      const carritoId = req.params.id;
      const bookId = req.body.bookId;
      const quantity = req.body.quantity;
  
      // Verificar si el ID del libro es válido
      if (!ObjectId.isValid(bookId)) {
        res.status(401).send('Invalid book ID');
        return;
      }
  
      // Verificar si el carrito existe
      const carrito = await carritoModel.findById(carritoId);
      if (!carrito) {
        res.status(404).send('Carrito not found');
        return;
      }
  
      // Agregar el libro al carrito
      carrito.items.push({
        bookId: bookId,
        quantity: quantity
      });
  
      // Guardar los cambios en el carrito
      const updatedCarrito = await carrito.save();
      res.json(updatedCarrito);
    } catch (error) {
      console.error('Error adding book to carrito:', error);
      res.status(500).send('Internal Server Error');
    }
  };

// delete carrito
exports.deleteCarrito = async (req, res) => {
    console.log('-> method delete');

    const {id} = req.params;
    
    if (!ObjectId.isValid(req.params.id)){
        res.status(401).send('invalid id')
        return
    } 

    const result = await carritoModel.findByIdAndDelete({'_id': id});
    if(!result){
        res.status(404).send('could not delete')
        return
    }
    res.json({message:`Carrito '${id}' fue eliminado correctamente`})};
