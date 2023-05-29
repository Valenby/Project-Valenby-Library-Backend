const {Router} = require('express');

const router = Router();

const {adminController} = require('../controller');


router.post('/', adminController.createUserAdmin);


module.exports = router;