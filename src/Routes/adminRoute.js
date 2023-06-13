const {Router} = require('express');

const router = Router();
const {comprasController} = require('../controller');

const {validateAdminToken}  = require("../middlewares/middlewareAdminTokenValid");

router.get('/verCompras', validateAdminToken, comprasController.getCompras);

module.exports = router;