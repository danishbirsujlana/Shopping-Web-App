const express = require('express');
const { test, createProduct, getAllProducts, updateProduct } = require('../controllers/productController');
const router = express.Router();

router.get("/test", test);
router.post("/product/new", createProduct);
router.get("/product/grid", getAllProducts);
router.post("/product/update/:id", updateProduct);

module.exports = router;