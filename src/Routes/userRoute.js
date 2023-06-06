const {Router} = require('express');

const router = Router();

const {userController} = require('../controller');
const validateMiddlewareUser = require('../middlewares/middlewareUser');


router.post('/', validateMiddlewareUser, userController.createUser);


module.exports = router;