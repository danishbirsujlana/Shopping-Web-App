const app = require('./app');
const CONFIG = require('./src/config/config');
const connectDB = require('./src/config/db');

// Uncaught Rejection
process.on("uncaughtException", (error) => {
    console.log(`Error: ${error.message}`);
    console.log("Shutting Server Down Due to Uncaught Exception");
    process.exit(1);
})

// DB Connection
connectDB();

const server = app.listen(CONFIG.PORT, () => {
    console.log(`Server active on http://localhost:${CONFIG.PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`);
    console.log("Shutting Server Down Due to Unhandled Rejection");
    server.close(() => {
        process.exit(1);
    })
})