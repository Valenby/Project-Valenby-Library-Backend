const Joi = require('joi');

//schema validate user
const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user').required()
});

const validateMiddlewareUser = (req, res, next) => {
    const {error} = createUserSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
      }
      next();
};

module.exports = validateMiddlewareUser;