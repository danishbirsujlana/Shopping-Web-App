const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    name: { type: String, required: [true, "Please Enter the Product Name"], trim: true },
    description: { type: String, required: [true, "Please Enter the Product Description"] },
    price: { type: Number, required: [true, "Please Enter the Price"] },
    rating: { type: Number, default: 0 },
    images: [
        {
            public_id: { type: String, required: true },
            url: { type: String, required: true },
        }
    ],
    category: { type: String, required: [true, "Please Enter the Category"] },
    stock: { type: Number, required: [true, "Please Enter the Stock"], default: 1 },
    numReviews: { type: Number, default: 0 },
    reviews: [
        {
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
        }
    ],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("ProductModel", ProductModel);