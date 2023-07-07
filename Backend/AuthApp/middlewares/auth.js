const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res, next) =>{
    try{
        //fetch token
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"token missing"
            })
        }
        //verify token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);

            req.user = decode;
        } catch(error){
            return res.status(401).json({
                success:false,
                message:"Error in token decode"
            })
        }
        next();
    } catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying token"
        })
    }
};

exports.isStudent = (req,res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for students"+error,
            })
        }
        next();
    } catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
}

exports.isAdmin = (req,res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for admin"
            })
        }
        next();
    } catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
};