const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config.env' });

const CONFIG = {
    DB_URI: process.env.DB_CONNECTION,
    PORT: process.env.PORT || 2020,
};
module.exports = CONFIG;