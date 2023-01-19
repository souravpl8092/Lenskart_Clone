import React, { useEffect } from "react";
import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import CartLength from "./CartLength";
import CartNavbar from "./CartNavbar";
import CartItem from "./CartItem";
import CartWithoutlogin from "./CartWithoutlogin";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import CouponBox from "./CouponBox";
import axios from "axios";
import { useState } from "react";

export const getCartData = async () => {
  return axios.get("https://spotless-erin-trousers.cyclic.app/data");
};

const CartPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalprice] = useState(0);
  const [cartLength, setCartlength] = useState(0);
  const [change, setChange] = useState(false);

  // let num = parseFloat(str.replace("Rs.", ""));
  const amount = (array) => {
    array.map(({ product_strike }) =>
      console.log(parseFloat(product_strike.replace("Rs.", ""))!==NaN)
    );
  };
  console.log(totalPrice);
  useEffect(() => {
    setLoading(true);

    getCartData()
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setCartlength(res.data.length);
        amount(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  return (
    <>
      <CartNavbar />

      <Flex
        width={"90%"}
        margin="auto"
        border={"0px solid red"}
        marginTop={"20px"}
        marginBottom="20px"
        gap={16}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Flex
          flexDirection={"column"}
          gap="5"
          border={"0px solid black"}
          width={{
            base: "95%",
            sm: "95%",
            md: "95%",
            lg: "65%",
            xl: "65%",
            "2xl": "65%",
          }}
        >
          <CartLength cartLength={cartLength} />
          {/* <CartItem /> */}
          {data.map(({ img_responsive, product_name, product_strike }) => (
            <CartItem
              img_responsive={img_responsive}
              product_name={product_name}
              product_strike={product_strike}
            />
          ))}
          <CartWithoutlogin />
        </Flex>
        <Flex
          flexDirection={"column"}
          border={"0px solid blue"}
          width={{
            base: "95%",
            sm: "95%",
            md: "95%",
            lg: "27%",
            xl: "27%",
            "2xl": "27%",
          }}
          gap={"5"}
        >
          <Text
            fontSize="20px"
            fontFamily="sans-serif"
            border={"0px solid red"}
            fontWeight={500}
          >
            Bill Details
          </Text>
          <PriceDetail />
          <SaleBox />
          <CouponBox />
          <Button
            backgroundColor={"#12daac"}
            color="#091e52"
            borderRadius={"20px"}
            padding="16px 24px 16px 24px"
            fontSize={"16px"}
            height="56px"
            fontWeight={"700"}
          >
            Proceed To Checkout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CartPage;