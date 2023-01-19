const express = require("express");
const { connect } = require("./config/db");
const bcrypt = require("bcrypt");
const { RegisterModel } = require("./models/register.model");
const { ProductModel } = require("./models/product.model");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const server = express();
server.use(express.json());

server.use(cors());

server.get("/", (req, res) => {
  res.send("welcome");
});
server.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
      } else {
        const newData = new RegisterModel({
          name,
          email,
          password: hash,
        });
        await newData.save();
        res.send("registered");
      }
    });
  } catch (error) {
    console.log(error);
    res.send("enter all the details");
  }
});
server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign({ name: "masai" }, "masai");
          res.send({ status: "login successful", token: token });
        } else {
          res.send("wrong entry");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send("wrong entry");
  }
});
server.post("/post", async (req, res) => {
  const data = req.body;
  try {
    await ProductModel.insertMany(data);

    res.send("data has been sent");
  } catch (error) {
    res.send("error");
  }
});
server.get("/data", async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
server.listen(3500, async () => {
  try {
    await connect;
    console.log("mongoDb connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running at port 3500`);
});
