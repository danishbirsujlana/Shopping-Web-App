const ProductModel = require('../models/Product');
const ErrorHandler = require('../utils/ErrorHandler');
const AsyncHandler = require('../middleware/AsyncCatch');
const test = async (req, res) => {
    console.log("Working fine!!!");
    res.status(200).json({ message: 'Working fine!' });
}

// Only Admin
/* ======================================================================================================================================== */
const createProduct = AsyncHandler(async (req, res, next) => {
    const product = await ProductModel.create(req.body);
    await product.save()
    res.status(201).json({ success: true, product });
});

const updateProduct = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    const newProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, product: newProduct });
});

const deleteProduct = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    await ProductModel.findByIdAndDelete(id);
    res.status(200).json({ success: true });
});
/* ======================================================================================================================================== */

// All
/* ======================================================================================================================================== */
const getAllProducts = AsyncHandler(async (req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json({ success: true, products });
});

const productDetail = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    res.status(200).json({ success: true, product });
});
/* ======================================================================================================================================== */

module.exports = {
    test,
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    productDetail
}