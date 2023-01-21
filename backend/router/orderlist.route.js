const express = require("express");

const { userModel } = require("../model/user.model");

const orderlistRouter = express.Router();

// -------------------------------------------------------------
const createProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    try {
        // const savedproduct=await product.save();
        try {
            let user = await userModel.findById({_id:userId});
            let orderlist = user.orderlist;
            console.log("this is from cart and this is old user:- " , user  , cart);
            orderlist = [...orderlist,req.body];
            await userModel.findByIdAndUpdate({_id:userId},{orderlist:orderlist});
            let sameuser = await userModel.findById({_id:userId});
            console.log("this is from cart and this is new user:- " , sameuser);
        } catch (error) {
            next(error);
        }
        res.status(200).json(req.body);
    } catch (error) {
        next(error);
    }
}

// route for the add the data in to orderlist of perticuler user.(http://localhost:8080/orderlist/add/:userId);
orderlistRouter.post("/add/:userId",createProduct);



// -------------------------------------------------------------








module.exports = orderlistRouter;