require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
//Import user Route
const { userRouter } = require("./router/user.router");
//Import Products Route
const productsRouter = require("./router/product.router");
//Import Admin Route
const adminRouter = require("./router/admin.router");
//Import Cart Route
const cartRouter = require("./router/cart.routes");

//for User Router
 app.use("/user",userRouter)
// For Products Router
app.use("/products", productsRouter);

// For admin Router
app.use("/admin", adminRouter);

//For Cart Router
app.use("/cart", cartRouter);

app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
  console.log(`The Port is Running on ${PORT}`);
});
