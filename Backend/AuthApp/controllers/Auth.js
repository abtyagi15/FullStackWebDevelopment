const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { options } = require('../routes/user');
require('dotenv').config();

//signup route handler 
exports.signup = async (req,res) => {
    try{
        const {name,email,password,role} = req.body;
        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(404).json(
                {               
                    success:false,
                    message:'User with this email already Exists',
                }
            );
        }

        //password secure
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:`Error in hashing the password ${err}`,
            })
        }

        //create entry for user
        const user = await User.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json({
            success:true,
            message: 'User created successfully',
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, try again',
        })
    }
}

exports.login = async (req,res) => {
    try{
        
    const {email,password} = req.body;
    //validation of email and password
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:'Please fill all the details carefully',
        });
    }
    //check user in db
    let user = await User.findOne({email});
    //if not registered user
    if(!user){
        return res.status(401).json({
            success:false,
            message: 'User is not registered', 
        })
    }

    const payload = {
        email:user.email,
        id:user._id,
        role:user.role,
    }
    //verify psswd and generate jwt token
    if(await bcrypt.compare(password,user.password)){
        //password match
        let token = jwt.sign(payload,process.env.JWT_SECRET,
            {
                expiresIn:"2h",
            });
        
        user = user.toObject();
        user.token = token;
        user.password = undefined;

        const options = {
            expiresIn: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly: true,
        }

        res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message: "User logged in successfully"
        })

    }
    else{
        //password do not match 
        return res.status(403).json({
            success: false,
            message:'Entered password is wrong',
        })
    }
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
                success:false,
                message: "Login unsuccessfull"+error,
                })
    }
}
