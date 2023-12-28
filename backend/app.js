const express = require('express');
const app = express();
const productRoute = require('./src/routes/productRoutes');
app.use(express.json());
app.use('/api/v1', productRoute);
module.exports = app;