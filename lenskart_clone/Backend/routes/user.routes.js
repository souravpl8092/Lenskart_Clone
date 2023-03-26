const express = require("express");
const { userModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const users = await userModel.find(query);
    res.status(200).send(users);
  } catch (error) {
    console.log(err);
    res.status(500).send({ err: "Something went wrong" });
  }
});

userRouter.post("/register", async (req, res) => {
  const { email, password, first_name, last_name, ph_no } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        console.log(err);
      } else {
        const user = new userModel({
          first_name,
          last_name,
          ph_no,
          email,
          password: secure_password,
        });
        await user.save();
        res.send("Registered");
      }
    });
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.find({ email });
    const hashed_password = user[0].password;
    if (user.length > 0) {
      bcrypt.compare(password, hashed_password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai");
          res.send({ msg: "Login Successful", token: token });
        } else {
          res.send("Wrong Credential");
        }
      });
    } else {
      res.send("Wrong Credential");
    }
  } catch (err) {
    res.send("Something went wrong");
    console.log(err);
  }
});

module.exports = {
  userRouter,
};
