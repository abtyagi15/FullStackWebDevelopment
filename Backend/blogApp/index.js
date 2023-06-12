const express = require('express');
const app = express();
const dbConnect = require('./config/Database');
require('dotenv').config();
const blog = require('./routes/blog');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    try{
        console.log("Server connected successfully, PORT : "+PORT)
    }
    catch(err){
        console.log("Error occured in PORT connection : "+err)
    }
})

app.use(express.json());
app.use("/api/v1",blog);




app.get('/', (req,res) => {
    res.send("Hello, this is test example")
});

dbConnect();
