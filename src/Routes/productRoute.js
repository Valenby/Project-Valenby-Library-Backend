const {Router} = require('express');

const router = Router();

const {productController} = require('../controller');
const {validateMiddlewareCreateBook, validateMiddlewareUpdateBook } = require('../middlewares/MiddlewareBook');
const {validateAdminToken}  = require("../middlewares/middlewareAdminTokenValid");

router.get('/', productController.getBook );
router.get('/:id', productController.getBookId);
router.post('/',[validateAdminToken, validateMiddlewareCreateBook], productController.createBook);
router.patch('/:id', [validateAdminToken, validateMiddlewareUpdateBook], productController.updateBook);
router.delete('/:id', validateAdminToken, productController.deleteBook);

module.exports = router;