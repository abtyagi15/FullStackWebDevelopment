const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//server initiation
app.listen(3000, ()=>{
    console.log("Server started at port 3000")
});

// specificlly parse json data & add it in the request.body
app.use(bodyParser.json());

//define port
app.get('/', (request,response)=>{
    response.send("Hello ji")
});

app.post('/api/cars', (request,response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted successfully")
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => { 
    console.log("Connection is successful")
})
.catch((error) => {
    console.log("Error occured"+error)
});