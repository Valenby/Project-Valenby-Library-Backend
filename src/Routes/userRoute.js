const {Router} = require('express');

const router = Router();

const {userController} = require('../controller');


router.post('/', userController.createUser);


module.exports = router;