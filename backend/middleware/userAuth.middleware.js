require("dotenv").config();
const jwt = require("jsonwebtoken");
 

const Authenticate = (req,res,next) => {
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,process.env.key)
        next()
    }
    else{
        res.send("Login first")
    }
  
}

module.exports = Authenticate