const {Router} = require('express');

const router = Router();
const { validateAdminToken } = require("../middlewares/middlewareAdminTokenValid")

const {comprasController} = require('../controller');

router.get('/compras', validateAdminToken, comprasController.getCompras);


module.exports = router;