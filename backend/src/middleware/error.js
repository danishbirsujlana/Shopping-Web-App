const ErrorHandler = require("../utils/ErrorHandler");

const handleError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({ status: false, message: err.message, stack: err.stack });
}

module.exports = handleError;