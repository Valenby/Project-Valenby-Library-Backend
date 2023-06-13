const {compraModel, userModel, carritoModel } = require('../model');

// ver compras admins.
exports.getCompras = async (_,res) => {
    console.log(' -> method getCompras');
    const result = await compraModel.find().populate("user");
    res.json(result);
};

// comprar libros del carrito users
exports.comprarBook = async (req, res) => {

    //extraemos info del user
    const userId = req.headers.userId
    const infoUser = await userModel.findById({'_id':userId})
    const carritoId = infoUser.carrito
  
    // se saca la direccion de envio
    const direccionEnvio = req.body.direccionEnvio
  
    // obtenemos el carrito con sus libros
    const carrito = await carritoModel.findById(carritoId).populate('items.bookId');
    
    //antes de que se ejecute la compra verificamos si si existe un carrito
    if (!carrito){
      res.status(404).send('carrito not found ')
      return
    }
    //! hacer resta para el stock
    // usando el modelo de product hacer un findbyidandupdate de tal forma que se le
    // reste el stock con la cantidad que esta comprando el men en el carrito
    // y guardar con un .save()
    //TODO hacer conexion con el metodo de pago
  
    //logica de la compra
    const result = await compraModel.create({
      user: userId,
      direccionEnvio: direccionEnvio,
      carrito: {
        items: carrito.items
      }
    })
  
    await carritoModel.findByIdAndDelete(carritoId)
    const mesaggeUser = {
      result,
      message: 'su compra fue exitosa'
    }
    res.json(mesaggeUser);
  }