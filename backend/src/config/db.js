const mongoose = require('mongoose');
const CONFIG = require('./config');

mongoose.connect(CONFIG.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then((data) => {
    console.log(`DB Connected with server: ${data.connection.host}`);
}).catch((error) => {
    console.log("Error: " + error);
});

const connectDB = () => {
    mongoose.connect(CONFIG.DB_URI, {}).then((data) => {
        console.log(`DB Connected with server: ${data.connection.host}`);
    }).catch((error) => {
        console.log("Error: " + error);
    });
}

module.exports = connectDB;