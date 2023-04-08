import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import CartLength from "./CartLength";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import CartEmpty from "./CartEmpty";
import CouponBox from "./CouponBox";
import Footer from "../../Components/Footer/Footer";
import {
  removeFromCart,
  decrement,
  increment
} from "../../redux/CartPage/action";
import { Flex, Text, Button, Heading, Image, Box } from "@chakra-ui/react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.mPrice * item.quantity,
      0
    );
    return totalPrice;
  };

  const getdiscountPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalPrice;
  };

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementChange = (id, qty) => {
    if (qty < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrement(id));
    }
  };

  const handleIncrementChange = (id) => {
    dispatch(increment(id));
  };

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
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
            "2xl": "row"
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
              "2xl": "65%"
            }}
          >
            <CartLength cartLength={cart.length} />

            {cart &&
              cart &&
              cart.map((item) => (
                <Flex
                  gap={2}
                  border={"0px solid grey"}
                  borderRadius="10px"
                  boxShadow={"lg"}
                  padding={"15px"}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                    "2xl": "row"
                  }}
                >
                  <Image
                    width={{
                      base: "50%",
                      sm: "35%",
                      md: "30%",
                      lg: "25%",
                      xl: "25%",
                      "2xl": "20%"
                    }}
                    margin={{
                      base: "auto",
                      sm: "auto",
                      md: "auto",
                      lg: "unset",
                      xl: "unset",
                      "2xl": "unset"
                    }}
                    src={item.imageTsrc}
                  />
                  <Flex
                    flexDirection={"column"}
                    border={"0px solid blue"}
                    gap="4"
                    width={{
                      base: "95%",
                      sm: "95%",
                      md: "95%",
                      lg: "70%",
                      xl: "70%",
                      "2xl": "70%"
                    }}
                    margin={{
                      base: "auto",
                      sm: "auto",
                      md: "auto",
                      lg: "unset",
                      xl: "unset",
                      "2xl": "unset"
                    }}
                  >
                    <Flex
                      justifyContent={"space-between"}
                      border={"0px solid green"}
                      gap="20"
                      marginTop={5}
                    >
                      <Heading
                        as="h1"
                        fontSize={"18px"}
                        lineHeight="22px"
                        textTransform={"capitalize"}
                        letterSpacing="-0.32px"
                        fontWeight={500}
                      >
                        {item.productRefLink}
                      </Heading>
                      <Flex gap={"2"}>
                        <Text
                          fontSize={"18px"}
                          fontWeight="500"
                          color="gray.600"
                        >
                          ₹{item.mPrice}
                        </Text>
                      </Flex>
                    </Flex>
                    <Box border={"1px dashed #CECEDF"}></Box>
                    <Flex justifyContent={"space-between"}>
                      <Heading
                        as="h1"
                        fontSize={"18px"}
                        lineHeight="22px"
                        textTransform={"capitalize"}
                        fontWeight={500}
                      >
                        Final Price
                      </Heading>
                      <Flex gap={"2"}>
                        <Text
                          fontSize={"18px"}
                          fontWeight="500"
                          color="gray.600"
                        >
                          ₹{item.mPrice}
                        </Text>
                      </Flex>
                    </Flex>
                    <Box border={"1px dashed #CECEDF"}></Box>
                    <Flex
                      border={"0px solid grey"}
                      gap="5"
                      justifyContent="space-between"
                    >
                      <Button
                        backgroundColor={"white"}
                        _hover={"backgroundColor:white"}
                        textDecoration="underline"
                        fontSize={"18"}
                        ml="-1.5"
                        onClick={() => handleDelete(item._id)}
                      >
                        Remove
                      </Button>

                      <Flex
                        align="center"
                        border="1px"
                        borderColor="gray.400"
                        borderRadius="3xl"
                      >
                        <Button
                          bg="whiteAlpha.900"
                          size="md"
                          borderRadius="50%"
                          fontSize="20px"
                          onClick={() =>
                            handleDecrementChange(item.id, item.quantity)
                          }
                        >
                          -
                        </Button>

                        <Box mx="2">{item.quantity}</Box>
                        <Button
                          bg="whiteAlpha.900"
                          borderRadius="50%"
                          fontSize="20px"
                          size="md"
                          onClick={() => handleIncrementChange(item.id)}
                        >
                          +
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
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
              "2xl": "27%"
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
              totalPrice={getTotalPrice()}
              discountPrice={getdiscountPrice()}
            />
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
              onClick={() => navigate("/shiping")}
            >
              Proceed To Checkout
            </Button>
          </Flex>
        </Flex>
      ) : (
        <CartEmpty />
      )}
      <Footer />
    </>
  );
};

export default CartPage;
