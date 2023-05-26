const { Router } = require('express');

const router = Router();

const {appController} = require('../controller');

router.get("/", appController.healthCheck);

module.exports = router; 