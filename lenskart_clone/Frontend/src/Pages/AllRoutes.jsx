import React from "react";
import { Route, Routes } from "react-router-dom";
import Payment from "../Pages/Checkout/payment";
import Pay from "./Payment/pay";
import CartPage from "./Cart/index";
import Products from "./Products/Products";
import Home from "./Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shiping" element={<Payment />} />
      <Route path="/payment" element={<Pay />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
