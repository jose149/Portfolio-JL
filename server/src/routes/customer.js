const path = require('path');

const express = require("express");

const customerController = require('../controllers/customer')

const router = express.Router();

router.get('/', customerController.getIndex);
router.get('/team', customerController.getTeam);

module.exports = router;
