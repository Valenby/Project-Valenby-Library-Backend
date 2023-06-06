const {Router} = require('express');

const router = Router();

const {productController} = require('../controller');
const {validateMiddlewareCreateBook, validateMiddlewareUpdateBook } = require('../middlewares/MiddlewareBook');

router.get('/', productController.getBook );
router.get('/:id', productController.getBookId);
router.post('/', validateMiddlewareCreateBook, productController.createBook);
router.patch('/:id', validateMiddlewareUpdateBook, productController.updateBook);
router.delete('/:id', productController.deleteBook);

module.exports = router;