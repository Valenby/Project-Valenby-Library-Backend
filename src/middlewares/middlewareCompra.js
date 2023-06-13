const Joi = require('joi');

//schema validate compra user
const compraSchema = Joi.object({
    direccionEnvio: Joi.string().required(),
});

const validateMiddlewareCompra = (req, res, next) => {
    const {error} = compraSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
      }
      next();
};

module.exports = validateMiddlewareCompra;