const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());



//mount the todo API routes 
app.use("/api/v1",todoRoutes);




app.listen(PORT, () => {
    console.log(`Server started successfully ${PORT}`)
});


const  dbConnect = require('./config/database');
dbConnect();

app.get('/',(request,response) => {
    response.send(`<h1>This is homepage</h1>`)
});