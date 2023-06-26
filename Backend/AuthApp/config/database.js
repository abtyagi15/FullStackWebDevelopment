const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
    mongoose.connect(proces.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("DB connected successfully"))
    .catch(error => {
        console.log("DB connection issues: "+error);
        process.exit(1); 
    })
}
