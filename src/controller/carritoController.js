const { ObjectId } = require('mongodb');

const {carritoModel, userModel, bookProductModel} = require('../model');

//create carrito
exports.createCarrito = async (req, res) => {
    console.log('-> method creacteCarrito')

    //validamos id del libro
    if (!ObjectId.isValid(req.body.bookId)){
        res.status(401).send('invalid id')
        return
    } 
    // creamos la estructura del carrito
    const newCarrito = {
        items: [{
            bookId:  req.body.bookId,
            quantity:  req.body.quantity
        }
    ]}
    //creamos el carrito
    const result = await carritoModel.create(newCarrito);

    // Logica para referenciar al carrito creado, con el usuario.
    const userId = req.headers.userId
    const userCarrito = {
      carrito: result._id
    }
    //aca le ponemos dueño al carrito que es el usuario que viene userId
    await userModel.findByIdAndUpdate({'_id':userId}, userCarrito, {new: true})

    res.json(result)
};

// buscar carrito 
exports.getCarrito = async (req, res) => {
  console.log('-> method viewIdCarrito');

  const userId = req.headers.userId
  const infoUser = await userModel.findById({'_id': userId})
  const carritoId = infoUser.carrito

  if (!carritoId){
    res.status(200).send('no tienes libros seleccionados')
    return
  }

  //buscamos carrito y devolvemos todo el objeto carrito
  const carrito = await carritoModel.findById({'_id': carritoId}).populate('items.bookId')

  if (!carrito){
      res.status(404).send('carrito not found ')
      return
  }
  res.json(carrito);
};

//agregar mas libros al carrito
exports.addBookAlCarrito = async (req, res) => {
    try {
      const bookId = req.body.bookId;
      const quantity = req.body.quantity;

      //extraemos inf del user
      const userId = req.headers.userId
      const infoUser = await userModel.findById({'_id': userId})
      const carritoId = infoUser.carrito

      // encontramos el carrito
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

// delete un solo item del carrito
exports.deleteItemcarrito = async (req, res) => {
  console.log('method -> delete one items carrito');
  //extraemos info del user
  const userId = req.headers.userId
  const infoUser = await userModel.findById({'_id':userId})
  const carritoId = infoUser.carrito._id
  const itemIdborrar = req.params.id
  const carrito = await carritoModel.findById({'_id': carritoId})

  if(!carrito){
    res.status(404).send('could not delete')
    return
  }

  carrito.items = carrito.items.filter(item => {
    if(item._id == itemIdborrar) return
    return item
  })

  await carrito.save()

  res.json({message:`item '${itemIdborrar}' fue eliminado correctamente`})

}

// delete carrito
exports.deleteCarrito = async (req, res) => {
    console.log('-> method delete');
    
    //extraemos info del user
    const userId = req.headers.userId
    const infoUser = await userModel.findById({'_id':userId})
    const carritoId = infoUser.carrito
    
    const result = await carritoModel.findByIdAndDelete({'_id': carritoId});
  
    if(!result){
        res.status(404).send('could not delete')
        return
    }
    res.json({message:`Carrito '${carritoId}' fue eliminado correctamente`})
};

