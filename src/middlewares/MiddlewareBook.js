const Joi = require('joi');

const {CategoryEnum} = require('../model/productModel');

// schema validate book
const createBookSchema = Joi.object({
  category: Joi.string().valid(...Object.values(CategoryEnum)).required(),
  tags: Joi.array().items(Joi.string()).optional(),
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  pages: Joi.number().integer().min(0).required(),
  stock: Joi.number().integer().min(0).required(),
  price: Joi.number().min(0).required()
});

const updateBookSchema = Joi.object({
    category: Joi.string().valid(...Object.values(CategoryEnum)),
  tags: Joi.array().items(Joi.string()),
  title: Joi.string(),
  author: Joi.string(),
  description: Joi.string(),
  pages: Joi.number().integer().min(0),
  stock: Joi.number().integer().min(0),
  price: Joi.number().min(0)
});

const validateMiddlewareCreateBook  = (req, res, next) => {
    const { error } = createBookSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
      }
      next();
}

const validateMiddlewareUpdateBook  = (req, res, next) => { //Para que lo haga mi amorsito
    const { error } = updateBookSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
      }
      next();
};
module.exports = {
    validateMiddlewareCreateBook,
    validateMiddlewareUpdateBook
}