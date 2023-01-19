const express = require("express");
const Router = express.Router();

//Import Products Module
const Product = require("../model/product.model");

// Get all Products from the database at url (http://localhost:8080/products/desks)

Router.get("/desks" , async (req,res) => {
  try {
    const products = await Product.find({category : req.url});
    res.send(products);
  } catch (error) {
    res.send({error:error});
  }
});

// Get all Products from the database at url (http://localhost:8080/products/watch)

Router.get("/watch" , async (req,res) => {
  try {
    const products = await Product.find({category : req.url});
    res.send(products);
  } catch (error) {
    res.send({error:error});
  }
});

// Get all Products from the database at url (http://localhost:8080/products/bag)

Router.get("/bag" , async (req,res) => {
  try {
    const products = await Product.find({category : req.url});
    res.send(products);
  } catch (error) {
    res.send({error:error});
  }
});

// Get all Products from the database at url (http://localhost:8080/products/wallet)

Router.get("/wallet" , async (req,res) => {
  try {
    const products = await Product.find({category : req.url});
    res.send(products);
  } catch (error) {
    res.send({error:error});
  }
});

// Get all Products from the database at url (http://localhost:8080/products/messengerbag)

Router.get("/messengerbag" , async (req,res) => {
  try {
    const products = await Product.find({category : req.url});
    res.send(products);
  } catch (error) {
    res.send({error:error});
  }
});

// post The all Products into the database at url (http://localhost:8080/products/add)

Router.post("/add", async (req, res) => {
  const loge = req.body;
  try {
    let data = new Product(loge);
    await data.save();
    res.status(200).send({ msg: "Product product added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

// delete Products into the database at url (http://localhost:8080/products/delete/id)

Router.delete("/delet/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "delete product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

module.exports = Router;
