const express = require("express");
const { CartModel } = require("../Models/cart.model");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const carts = await CartModel.find(query);
    res.status(200).send(carts);
  } catch (error) {
    console.log(err);
    res.status(500).send({ err: "Something went wrong" });
  }
});

cartRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const new_cart = new CartModel(payload);
    await new_cart.save();
    res.status(201).send("add new cartItems");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Something went wrong" });
  }
});

cartRouter.patch("/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    const cart = await CartModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(204).send({
      success: true,
      msg: "Successfully Updated the cartItem",
      carts: cart,
    });
    await cart.save();
  } catch (err) {
    console.log({ err: err, msg: " Cart Update Error!" });
    res.send({ success: false, msg: " Cart Update Error!", err: err });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The cartItem" });
  } catch {
    console.log("err :", err);
    res.send({ msg: err });
  }
});

module.exports = { cartRouter };
