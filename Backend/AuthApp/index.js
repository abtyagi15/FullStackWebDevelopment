const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;


app.use(express.json());

require('./config/database').dbConnect();

const user = require('./routes/user.js');
app.use("/api/v1",user);

app.listen(PORT,() => console.log("Server connected successfully, PORT : "+PORT))