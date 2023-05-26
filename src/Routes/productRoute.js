const {Router} = require('express');

const router = Router();

const {productController} = require('../controller');

router.get('/', productController.getBookProduct );

router.post('/', productController.createBookProduct);

module.exports = router;