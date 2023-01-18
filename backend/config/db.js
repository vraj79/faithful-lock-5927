require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.mongoURL;

const connect = mongoose.connect(url);
module.exports = { connect };
