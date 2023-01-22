import React, { useEffect } from "react";
import { Box, Flex, Text, Button, useToast } from "@chakra-ui/react";
import CartLength from "./CartLength";
import CartNavbar from "./CartNavbar";
import CartItem from "./CartItem";
import CartWithoutlogin from "./CartWithoutlogin";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import CouponBox from "./CouponBox";
import axios from "axios";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import NotFound from "./CartError";
import { useNavigate } from "react-router-dom";

export const getCartData = async () => {
  return axios.get("https://spotless-erin-trousers.cyclic.app/data");
};

const CartPage = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalprice] = useState(0);
  const [cartLength, setCartlength] = useState(0);
  const [change, setChange] = useState(false);
  const [discountPrice, setdiscountPrice] = useState(0);

  // let num = parseFloat(str.replace("Rs.", ""));
  const amount = (array) => {
    array.map(({ product_strike, product_discountedPrice }) => {
      if (product_strike !== "" && product_discountedPrice !== "") {
        setTotalprice(
          (pre) => pre + parseFloat(product_strike.replace("Rs.", ""))
        );
        setdiscountPrice(
          (pre) => pre + parseFloat(product_discountedPrice.replace("Rs.", ""))
        );
      }
    });
  };

  const DeleteRequest = async (id) => {
    try {
      let response = await axios.delete(
        `https://spotless-erin-trousers.cyclic.app/cart/${id}`
      );
      getCartData().then((res) => {
        return setData(res);
      });
    } catch (err) {
      return err;
    }
  };

  //console.log(totalPrice);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getCartData()
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setCartlength(res.data.length);
        amount(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <CartNavbar />
      {error ? (
        <NotFound />
      ) : loading ? (
        <Box
          width="20%"
          margin={"auto"}
          border="0px solid red"
          justifyContent={"center"}
          alignItems={"center"}
          marginTop="100px"
        >
          <RingLoader color="#36d7b7" size={200} />
        </Box>
      ) : (
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
            {data.map(
              ({ img_responsive, product_name, product_strike, _id }) => (
                <CartItem
                  key={_id}
                  img_responsive={img_responsive}
                  product_name={product_name}
                  product_strike={product_strike}
                  DeleteRequest={DeleteRequest}
                />
              )
            )}
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
            <PriceDetail
              totalPrice={totalPrice}
              discountPrice={discountPrice}
            />
            <SaleBox />
            <CouponBox totalPrice={totalPrice} />

            <Button
              backgroundColor={"#12daac"}
              color="#091e52"
              borderRadius={"20px"}
              padding="16px 24px 16px 24px"
              fontSize={"16px"}
              height="56px"
              fontWeight={"700"}
              onClick={() => navigate("/shiping")}
            >
              Proceed To Checkout
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default CartPage;

// let num = parseFloat(product_strike.replace("Rs.", ""));
//       if (num === "") {
//         count++;
//       } else {
//         console.log(num);
//       }
