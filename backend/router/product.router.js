const express = require("express");
const Router = express.Router();
const adminAuth = require("../middleware/adminAuth.middleware");
//Import Products Module
const Product = require("../model/product.model");

//Import QueryFinder controller.
const QueryFinder = require("../Utils/QueryFinder");

//function for finding the data as given query.
const getAllProducts = async (req, res) => {
  try {
    const resPerPage = 10;
    const totalProduct = await Product.countDocuments();
    const apiFeature = new QueryFinder(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resPerPage)
      .sort();
    const products = await apiFeature.query;
    res.status(200).send({ success: true, products, totalProduct });
  } catch (error) {
    res.send({ error: error.message });
  }
};

//route for the get request via query.
// url for get from search (http://localhost:8080/products?title=<product>)
Router.route("/").get(getAllProducts);

const getSingleProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const totalProduct = await Product.findById({ _id: id });
    res.status(200).send({ success: true, totalProduct });
  } catch (error) {
    res.send({ error: error.message });
  }
};
//Single Products into the database at url (http://localhost:8080/products/:id)
Router.route("/:id").get(getSingleProducts);

// post The all Products into the database at url (http://localhost:8080/products/add)

Router.use(adminAuth);
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

Router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "delete product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

Router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await Product.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ msg: "update product successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

Router.get("/get/getone/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let data = await Product.find({ _id: id });
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});
Router.get("/get/all", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send({ product: product });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

module.exports = Router;
