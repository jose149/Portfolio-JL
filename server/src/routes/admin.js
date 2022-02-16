const express = require("express");
// const path = require('path');
// const rootDir = require('../util/path');

const adminController = require('../controllers/admin')
const router = express.Router();

router.get('/add-worker', adminController.getAddWorker);
router.get('/team', adminController.getTeam);
router.post('/add-worker', adminController.postAddWorker);

module.exports = router;