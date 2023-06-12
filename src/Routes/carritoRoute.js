const {Router} = require('express');
const { validateToken } = require("../middlewares/middlewareTokenValid")
const router = Router();

const {carritoController} = require('../controller');
const validateMiddlewareCarrito = require('../middlewares/middlewareCarrito');

router.get('/',validateToken, carritoController.getCarrito);
router.post('/', [validateToken ,validateMiddlewareCarrito],  carritoController.createCarrito);
router.post('/comprar', validateToken, carritoController.comprarBook);
router.patch('/',[validateToken ,validateMiddlewareCarrito], carritoController.addBookAlCarrito);
router.delete('/', validateToken, carritoController.deleteCarrito);





module.exports = router;