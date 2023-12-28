const app = require('./app');
const CONFIG = require('./src/config/config');
const connectDB = require('./src/config/db');

// DB Connection
connectDB();
app.listen(CONFIG.PORT, () => {
    console.log(`Server active on http://localhost:${CONFIG.PORT}`);
})