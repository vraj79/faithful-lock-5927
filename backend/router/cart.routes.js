const express = require("express");
const CartItem = require("../model/cartItem.model");
const { userModel } = require("../model/user.model");

const cartRouter = express.Router();

cartRouter.get("/" , (req,res) => {
    res.send("this is the get request in the cart router.");
});

// -------------------------------------------------------------
const createProduct=async(req,res,next)=>{
    const userId=req.params.userId;
    const product=new CartItem(req.body)

    try {
        const savedproduct=await product.save();
        try {
            await userModel.findByIdAndUpdate({_id:userId},{cartitem:[...this.cartitem,savedproduct._id]});
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedproduct);
    } catch (error) {
        next(error);
    }
}

cartRouter.post("/add/:userId",createProduct);


// cartRouter.post("/add" , async (req,res) => {
//     try {
//         const newCartItem = new CartItem();
//         await newCartItem.save();
//         res.send({message : "product added successfully."});
//     } catch (error) {
//         res.send({error:error});
//     } 
// });

// -------------------------------------------------------------
cartRouter.patch("/update/:id" , async(req,res) => {
    const ID = req.params.id;
    try {
        res.send("updated Items successfully..");
    } catch (error) {
        res.send({error : error});
    }
});


cartRouter.delete("/delete/:id" , async(req,res) => {
    const ID = req.params.id;
    try {
        res.send("updated deleted successfully..");
    } catch (error) {
        res.send({error : error});
    }
})



module.exports = cartRouter;