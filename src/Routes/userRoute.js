const {Router} = require('express');

const router = Router();

const {userController} = require('../controller');
const {validateAdminCreation} =require('../middlewares/middlewareAdminTokenValid')
const validateMiddlewareUser = require('../middlewares/middlewareUser');

router.post('/', [validateAdminCreation, validateMiddlewareUser], userController.createUser);


module.exports = router;