const ProductModel = require('../models/Product');
const ErrorHandler = require('../utils/ErrorHandler');

const test = async (req, res) => {
    console.log("Working fine!!!");
    res.status(200).json({ message: 'Working fine!' });
}

// Only Admin
/* ======================================================================================================================================== */
const createProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.create(req.body);
        await product.save()
        res.status(201).json({ success: true, product });
    } catch (error) {
        console.log("Error in creating product: " + error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) return next(new ErrorHandler("Product Not Found", 404));

        const newProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, product: newProduct });
    } catch (error) {
        console.log("Error in updating product: " + error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) return next(new ErrorHandler("Product Not Found", 404));

        await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ success: true });
    } catch (error) {
        console.log("Error in updating product: " + error);
    }
}
/* ======================================================================================================================================== */

// All
/* ======================================================================================================================================== */
const getAllProducts = async (req, res, next) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({ success: true, products });
    } catch (error) {
        console.log("Error in getting all products: " + error)
    }
}

const productDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) return next(new ErrorHandler("Product Not Found", 404));

        res.status(200).json({ success: true, product });
    } catch (error) {
        console.log("Error in updating product: " + error);
    }
}
/* ======================================================================================================================================== */

module.exports = {
    test,
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    productDetail
}