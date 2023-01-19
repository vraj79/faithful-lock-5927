require("dotenv").config();
const express = require("express");
const bcyrpt = require("bcrypt");
const Admin = require("../model/admin.model");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const key = process.env.KEY;
Router.use(express.json());
// admin sign-up with hase password in this url (http://localhost:8080/admin/admin-signup)

Router.post("/admin-signup", async (req, res) => {
  const { email, password, first_name, last_name, avtar } = req.body;
  try {
    bcyrpt.hash(password, 4, async (err, secure_password) => {
      if (err) {
        console.log(err);
      } else {
        const admin = new Admin({
          email,
          password: secure_password,
          first_name,
          last_name,
          avtar,
        });
        await admin.save();
        res.status(200).send({ mag: "signup successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ msg: "Wrong credentials" });
  }
});

// admin login with hase password in this url ("http://localhost:8080/admin/login")

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.find({ email });
    const hase_pass = admin[0].password;

    if (admin.length > 0) {
      bcyrpt.compare(password, hase_pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ adminID: admin[0]._id }, key);
          res.send({ msg: "login successfull", token: token, admin: admin });
        } else {
          res.status(400).send({ msg: "wrong credntials" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "wrong credntials" });
  }
});

module.exports = Router;
