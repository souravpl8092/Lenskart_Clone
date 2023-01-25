import React, { useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import CartLength from "./CartLength";
import CartItem from "./CartItem";
import CartWithoutlogin from "./CartWithoutlogin";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import CouponBox from "./CouponBox";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/CartPage/action";
import CartEmpty from "./CartEmpty";

const CartPage = () => {
  const [change, setChange] = useState(false);

  const { data, loading, error, ItemCount, Totalprice, Totaldiscountprice } =
    useSelector((state) => state.CartReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      navigate("/NotFound");
    }
    setTimeout(() => {
      dispatch(getData());
    }, 1500);
  }, [change]);

  return (
    <>
      {loading ? (
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
      ) : data.length > 0 ? (
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
            <CartLength cartLength={ItemCount} />
            {/* <CartItem /> */}
            {data.map(
              ({
                img_responsive,
                product_name,
                product_strike,
                _id,
                product_discountedPrice,
              }) => (
                <CartItem
                  key={_id}
                  id={_id}
                  img_responsive={img_responsive}
                  product_name={product_name}
                  product_strike={product_strike}
                  product_discountedPrice={product_discountedPrice}
                  setChange={setChange}
                  change={change}
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
              totalPrice={Totalprice}
              discountPrice={Totaldiscountprice}
            />
            <SaleBox />
            <CouponBox setChange={setChange} change={change} />

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
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default CartPage;


