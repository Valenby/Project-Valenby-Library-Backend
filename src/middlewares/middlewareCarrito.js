const Joi = require('joi');

// schema validate carrito
const carritoSchema = Joi.object({
    bookId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required()
});

  
  const validateMiddlewareCarrito = (req, res, next) => {
    const { error } = carritoSchema.validate(req.body);
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }
    next();
  };

  module.exports = validateMiddlewareCarrito;