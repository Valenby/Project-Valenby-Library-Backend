const {Router} = require('express');

const router = Router();

const {carritoController} = require('../controller');
const validateMiddlewareCarrito = require('../middlewares/middlewareCarrito');

router.get('/:id', carritoController.getCarrito);
router.post('/', validateMiddlewareCarrito,  carritoController.createCarrito);



module.exports = router;