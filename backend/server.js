require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
app.use(express.json());

//Import Products Route
const productsRouter = require("./router/product.router");
//Import Admin Route
const adminRouter = require("./router/admin.router");
//Import Cart Route
const cartRouter = require("./router/cart.routes");

// For Products Router
app.use("/products", productsRouter);

// For admin Router
// app.use("/admin", adminRouter);

//For Cart Router
app.use("/cart" , cartRouter);

app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
});
