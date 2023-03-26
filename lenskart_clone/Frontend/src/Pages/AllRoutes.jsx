import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import SingleProduct from "./NewProduct/SingleProduct";
import { Privateroutes } from "../ContextApi/Privateroute";
import Payment from "../Pages/Checkout/Payment";
import Orders from "../Pages/Order/Orders";
import CartPage from "./Cart/index";
import Shipping from "../Pages/Checkout/Shipping";
import Confirm from "./Checkout/Confirm";
import OrderHistory from "./OrderHistory/OrderHistory";
import Wishlist from "./Wishlist/Wishlist";
import Productlist from "./Admin/Productlist";
import ProductPost from "./Admin/ProductPost";
import EditProduct from "./Admin/EditProduct";
import NewProduct from "./NewProduct/ProductList";
import NotFound from "./Cart/CartError";

const AllRoutes = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newproducts" element={<NewProduct />} />
      <Route path="/newproducts/:id" element={<SingleProduct />} />
      <Route
        path="/cartpage"
        element={
          <Privateroutes>
            <CartPage />
          </Privateroutes>
        }
      />
      <Route
        path="/shiping"
        element={
          <Privateroutes>
            <Shipping />
          </Privateroutes>
        }
      />
      <Route
        path="/orders"
        element={
          <Privateroutes>
            <Orders />
          </Privateroutes>
        }
      />
      <Route
        path="/payment"
        element={
          <Privateroutes>
            <Payment />
          </Privateroutes>
        }
      />
      <Route
        path="/confirm"
        element={
          <Privateroutes>
            <Confirm />
          </Privateroutes>
        }
      />
      <Route
        path="/orderhistory"
        element={
          <Privateroutes>
            <OrderHistory />
          </Privateroutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Privateroutes>
            <Wishlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productlist"
        element={
          <Privateroutes>
            <Productlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productpost"
        element={
          <Privateroutes>
            <ProductPost />
          </Privateroutes>
        }
      />
      <Route
        path="/editproduct/:id"
        element={
          <Privateroutes>
            <EditProduct />
          </Privateroutes>
        }
      />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
