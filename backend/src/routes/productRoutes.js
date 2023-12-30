const express = require('express');
const { test, createProduct, getAllProducts, updateProduct, deleteProduct, productDetail } = require('../controllers/productController');
const router = express.Router();

router.get("/test", test);
router.post("/product/new", createProduct);
router.get("/product/grid", getAllProducts);
router.post("/product/update/:id", updateProduct);
router.get("/product/delete/:id", deleteProduct);
router.get("/product/detail/:id", productDetail);

module.exports = router;