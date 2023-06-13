const {Router} = require('express');

const router = Router();

const {carritoController} = require('../controller');
const  {validateToken } = require("../middlewares/middlewareTokenValid")
const validateMiddlewareCarrito = require('../middlewares/middlewareCarrito');

router.get('/',validateToken, carritoController.getCarrito);
router.post('/', [validateToken ,validateMiddlewareCarrito],  carritoController.createCarrito);
router.patch('/',[validateToken ,validateMiddlewareCarrito], carritoController.addBookAlCarrito);
router.delete('/', validateToken, carritoController.deleteCarrito);

module.exports = router;