import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Payment from "../Pages/Checkout/payment";
import Pay from "./Payment/pay";
import CartPage from "./Cart/index";
import Products from "./Products/Products";
import Home from "./Home/Home";

const AllRoutes = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/payment" element={<Pay />} />
      <Route path="/shiping" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
