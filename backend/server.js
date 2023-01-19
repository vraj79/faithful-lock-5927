require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./config/db");
const PORT = process.env.PORT;
app.use(express.json());
//Import user Route
const {userRouter}=require("./router/user.router")
//Import Products Route
const productsRouter = require("./router/product.router");
//Import Admin Route
const adminRouter = require("./router/admin.router");

//for User Router
app.use("/user",userRouter)
// For Products Router
// app.use("/products", productsRouter);

// For admin Router
// app.use("/admin", adminRouter);

app.listen(PORT, async () => {
  try {
    await connect;
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
   console.log(`The Port is Running on ${PORT}`)
});
