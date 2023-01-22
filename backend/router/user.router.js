const express=require("express")
require("dotenv").config();
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter=express.Router()
const key = process.env.KEY;
const {userModel}=require("../model/user.model")

 userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
     try{
          const user=await userModel.find({email})
          if(user.length>0){
            bcyrpt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    var token=jwt.sign({course:"backend"},process.env.KEY)
                    res.send({msg:'Login Done',"token":token,user:user[0]})
                }
                else{
                    res.send("Wrong Credentials")
                  }
            })
            
          }
          else{
            res.send("Wrong Credentials")
          }
     }
     catch(err){
        res.send("Login Error")
     }
 })

 userRouter.post("/register",async(req,res)=>{
    let {email,password,first_name,last_name,mobile}=req.body
   
      const registeruser=await userModel.findOne({email})
       
        if(registeruser?.email){
            res.send({msg:"User already exists"    })
        }
       else{
        try{
            bcyrpt.hash(password,5,async(err,secure_pwd)=>{
               if(err){
                    
                   res.send({msg:"Register Again"})
               }
               else{
                   const user=new userModel( {email,password:secure_pwd,first_name,last_name,mobile})
                   await user.save()
                   res.send({msg:"User Register Successfully"})
               }
            })
        }
        catch(err){
           res.send( {msg:"Register Again"})
        }
       }
    
 })
userRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    
    try{
        const user=await userModel.find({_id:id})
        res.send({user:user})
    }
    catch(err){
        res.send("Error")
    }
})

userRouter.patch("/edit/:id",async(req,res)=>{
    const Id=req.params.id
    const payload=req.body
    const user= await userModel.find({_id:Id})
    let password=payload.password
    try{
        if(user.length>0){
            bcyrpt.hash(password ,5,async(err,secure_pwd)=>{
               if(err){
                res.send("Wrong Credentials 2")
               }
               else{
                await userModel.findByIdAndUpdate({_id:Id},payload)
                await userModel.findByIdAndUpdate({_id:Id},{ password:secure_pwd})
                res.send("update the User Profile")
               }
            })
                
        }
        else{
            res.send("Wrong Credentials 1")
        }
         
    }
    catch(err){
        res.send("Error 1")
    }
})

module.exports={userRouter}