const express = require("express");
const { userModel } = require("../model/user.model");

const wishlistRouter = express.Router();

// -------------------------------------------------------------
const createProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    try {
        // const savedproduct=await product.save();
        try {
            let user = await userModel.findById({_id:userId});
            let wishlist = user.wishlist;
            // console.log("this is from cart and this is old user:- " , user  , wishlist);
            wishlist = [...wishlist,req.body];
            await userModel.findByIdAndUpdate({_id:userId},{wishlist:wishlist});
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

// route for the add the data in to wishlist of perticuler user.(http://localhost:8080/wishlist/add/:userId);
// route for the add the data in to wishlist of perticuler user.(http://localhost:8080/wishlist/add/:userId);
wishlistRouter.post("/add/:userId",createProduct);



// -------------------------------------------------------------

const deleteProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    try {
        // const savedproduct=await product.save();
        try {
            let user = await userModel.findById({_id:userId});
            let wishlist = user.wishlist;
            console.log("this is from cart and this is old user:- " , user  , wishlist);
            wishlist = wishlist.filter((elem) => {
                return elem._id !== req.body._id;
            });
            await userModel.findByIdAndUpdate({_id:userId},{wishlist:wishlist});
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

// route for the delete the data in to wishlist of perticuler user.(http://localhost:8080/wishlist/delete/:userId);
wishlistRouter.post("/delete/:userId",deleteProduct);






module.exports = wishlistRouter;