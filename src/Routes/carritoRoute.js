const {Router} = require('express');
const { validateToken } = require("../middlewares/middlewareTokenValid")
const router = Router();

const {carritoController} = require('../controller');
const validateMiddlewareCarrito = require('../middlewares/middlewareCarrito');

router.get('/:id', carritoController.getCarrito);
router.post('/', [validateToken ,validateMiddlewareCarrito],  carritoController.createCarrito);
router.patch('/:id',[validateToken ,validateMiddlewareCarrito], carritoController.addBookAlCarrito);
router.delete('/:id', validateToken, carritoController.deleteCarrito);





module.exports = router;