const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        tyep:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"],
    }
});

module.exports = mongoose.model("user",userSchema);