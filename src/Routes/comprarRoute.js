const {Router} = require('express');

const router = Router();

const {comprasController} = require('../controller');
const { validateToken } = require("../middlewares/middlewareTokenValid")
const validateMiddlewareCompra = require('../middlewares/middlewareCompra')

router.post('/',[validateToken, validateMiddlewareCompra], comprasController.comprarBook);

module.exports = router;