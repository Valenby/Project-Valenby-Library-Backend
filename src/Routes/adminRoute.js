const {Router} = require('express');

const router = Router();

const {adminController} = require('../controller');
const validateMiddlewareUser = require('../middlewares/middlewareUser');


router.post('/', validateMiddlewareUser, adminController.createUserAdmin);


module.exports = router;