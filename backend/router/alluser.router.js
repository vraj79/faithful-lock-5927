const express=require("express")
require("dotenv").config();
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router=express.Router()
Router.use(express.json());
const key = process.env.KEY;
const adminAuth = require("../middleware/adminAuth.middleware");
const {userModel}=require("../model/user.model")

Router.get("/add",async(req,res)=>{
    
    try{
        const user=await userModel.find()
        res.send({user:user})
    }
    catch(err){
        res.send("Error")
    }
})
Router.use(adminAuth);
 Router.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
         await userModel.findByIdAndDelete({_id:id})
         res.send({user:"success"})
    }
    catch(err){
        res.send({user:"error"})
    }
 })
 
 module.exports = Router