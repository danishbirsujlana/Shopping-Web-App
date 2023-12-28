const ProductModel = require('../models/Product');
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
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        const newProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, newProduct });
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
/* ======================================================================================================================================== */

module.exports = {
    test,
    createProduct,
    getAllProducts,
    updateProduct
}