require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const Authenticate=require("./middleware/userAuth.middleware")
//Import user Route
const { userRouter } = require("./router/user.router");
//Import Products Route
const productsRouter = require("./router/product.router");
//Import Admin Route
const adminRouter = require("./router/admin.router");
//Import Cart Route
const cartRouter = require("./router/cart.routes");
//Import Wishlist Route
const wishlistRouter = require("./router/wishlist.route");
const Router=require("./router/alluser.router")
app.use("/alluser",Router)
//for User Router
 app.use("/user",userRouter)
//  app.use(Authenticate)
// For Products Router
app.use("/products", productsRouter);

// For admin Router
app.use("/admin", adminRouter);

//For Cart Router
app.use("/cart", cartRouter);

//For wishlist Router
app.use("/wishlist", wishlistRouter);

//For orderlist Router
app.use("/orderlist", wishlistRouter);


app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
  console.log(`The Port is Running on ${PORT}`);
});
