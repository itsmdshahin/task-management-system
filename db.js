// require("dotenv").config();
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;


// Connect Mongodb database connect
mongoose.connect(MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log("DATABASE IS CONNECTED");
}).catch((error) => {
    console.log("Database is not connected : " + error);
    process.exit(1);
});

module.exports = mongoose;
