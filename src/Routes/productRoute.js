const {Router} = require('express');

const router = Router();

const {productController} = require('../controller');

router.get('/', productController.getBook );
router.get('/:id', productController.getBookId);
router.post('/', productController.createBook);
router.patch('/:id', productController.updateBook);
router.delete('/:id', productController.deleteBook);

module.exports = router;