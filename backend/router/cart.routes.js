const express = require("express");
const CartItem = require("../model/cartItem.model");

const cartRouter = express.Router();

cartRouter.get("/" , (req,res) => {
    res.send("this is the get request in the cart router.");
});

cartRouter.post("/add" , async (req,res) => {
    try {
        const newCartItem = new CartItem();
        await newCartItem.save();
        res.send({message : "product added successfully."});
    } catch (error) {
        res.send({error:error});
    } 
});

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