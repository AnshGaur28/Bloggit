const { default: mongoose } = require('mongoose');
const  User  = require('../models/user')
const jwt = require('jsonwebtoken');
const userModel  = mongoose.model('User');
const protect = async (req, res , next)=>{
        try{
            let token ;
            if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {           
                token = req.headers.authorization.split(" ")[1];
            } else if (req.cookies.jwt) {
                token = req.cookies.jwt;
            }
            if(!token){
                res.status(401).json({message : 'No user found'})
            }
            else{
                const verified = jwt.verify(token, process.env.JWT_SECRET);      
                const user =  await userModel.findOne({email : verified.user.email})
                if(!user){
                    res.status(401).json({message: "Login to access Profile "})
                }
  
            }
            next();
            
        }
        catch(error){
            res.status(500).json({message : "Internal Server Error"});
        }
}
module.exports = {protect};