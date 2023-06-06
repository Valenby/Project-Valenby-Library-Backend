const {Router} = require('express');

const router = Router();

const {carritoController} = require('../controller');


router.get('/:id', carritoController.getCarrito);
router.post('/', carritoController.createCarrito);



module.exports = router;