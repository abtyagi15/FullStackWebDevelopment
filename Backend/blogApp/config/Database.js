const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
const dbConnect = () =>  mongoose.connect(DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {
    console.log("Database is connected successfully")
})
.catch((err) => {
    console.log("Error occured : "+err);
    process.exit(1);
})

module.exports = dbConnect;