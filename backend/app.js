const express = require('express');
const app = express();
const productRoute = require('./src/routes/productRoutes');
const handleError = require('./src/middleware/error');
app.use(express.json());
app.use('/api/v1', productRoute);
// Error Handle Middleware
app.use(handleError);
module.exports = app;