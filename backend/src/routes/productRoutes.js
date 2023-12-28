const express = require('express');
const { test } = require('../controllers/productController');
const router = express.Router();

router.get("/test", test);

module.exports = router;