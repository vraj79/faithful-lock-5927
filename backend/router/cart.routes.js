const express = require("express");
const CartItem = require("../model/cartItem.model");
const { userModel } = require("../model/user.model");

const cartRouter = express.Router();

// -------------------------------------------------------------
const createProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    try {
        // const savedproduct=await product.save();
        try {
            let user = await userModel.findById({_id:userId});
            let cart = user.cartitem;
            console.log("this is from cart and this is old user:- " , user  , cart);
            cart = [...cart,req.body];
            await userModel.findByIdAndUpdate({_id:userId},{cartitem:cart});
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

// route for the add the data in to cart of perticuler user.(http://localhost:8080/cart/add/:userId);
cartRouter.post("/add/:userId",createProduct);



// -------------------------------------------------------------

const deleteProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    try {
        // const savedproduct=await product.save();
        try {
            let user = await userModel.findById({_id:userId});
            let cart = user.cartitem;
            console.log("this is from cart and this is old user:- " , user  , cart);
            newcart = cart.filter((elem) => {
                return elem._id !== req.body._id;
            });
            await userModel.findByIdAndUpdate({_id:userId},{cartitem:newcart});
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

// route for the delete the data in to cart of perticuler user.(http://localhost:8080/cart/delete/:userId);
cartRouter.post("/delete/:userId",deleteProduct);


// cartRouter.delete("/delete/:id" , async(req,res) => {
//     const ID = req.params.id;
//     try {
//         res.send("updated deleted successfully..");
//     } catch (error) {
//         res.send({error : error});
//     }
// })



module.exports = cartRouter;