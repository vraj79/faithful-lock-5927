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

// Router.get("/" , async (req,res) => {
//     let query = req.query;
//     const {M , S , P} = query;
//   try {
//     let products;
//     if(P){
//       if(P = "LTH"){
//         products = await Product.find({maincategory : M , category : S }).sort({"price" : 1});
//       }else{
//         products = await Product.find({maincategory : M , category : S }).sort({"price" : -1});
//       }
//     }
//     res.send(products);

//   } catch (error) {
//     res.send({error:error});
//   }
// });

// Get all Products from the database at url (http://localhost:8080/products/desks)

Router.get("/desks", async (req, res) => {
  try {
    const products = await Product.find({ category: req.url });
    res.send(products);
  } catch (error) {
    res.send({ error: error });
  }
});

// Get all Products from the database at url (http://localhost:8080/products/watch)

Router.get("/watch", async (req, res) => {
  try {
    const products = await Product.find({ category: req.url });
    res.send(products);
  } catch (error) {
    res.send({ error: error });
  }
});

// Get all Products from the database at url (http://localhost:8080/products/bag)

Router.get("/bag", async (req, res) => {
  try {
    const products = await Product.find({ category: req.url });
    res.send(products);
  } catch (error) {
    res.send({ error: error });
  }
});

// Get all Products from the database at url (http://localhost:8080/products/wallet)
Router.get("/wallet", async (req, res) => {
  try {
    const products = await Product.find({ category: req.url });
    res.send(products);
  } catch (error) {
    res.send({ error: error });
  }
});

// Get all Products from the database at url (http://localhost:8080/products/messengerbag)

Router.get("/messengerbag", async (req, res) => {
  try {
    const products = await Product.find({ category: req.url });
    res.send(products);
  } catch (error) {
    res.send({ error: error });
  }
});

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

module.exports = Router;
