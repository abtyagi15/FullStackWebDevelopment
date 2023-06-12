const mongoose = require('mongoose');

require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("Database connection established")
    })
    .catch((error) => {
        console.log("Error in connection" + error);
        process.exit(1);

    });
}
module.exports = dbConnect;