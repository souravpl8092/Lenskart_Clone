import React from "react";
import CartLength from "./CartLength";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartEmpty from "./CartEmpty";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  removeFromCart,
  decrement,
  increment
} from "../../redux/CartPage/action";
import {
  Flex,
  Text,
  Button,
  Heading,
  Image,
  Box,
  useToast,
  Input
} from "@chakra-ui/react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [coupon, setCoupon] = useState(0);
  const toast = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode !== "") {
      if (couponCode === "MASAI40") {
        setCoupon(40);
        setCouponCode("");
      }
      if (couponCode === "MASAI90") {
        setCoupon(90);
        setCouponCode("");
      }
      if (couponCode === "MASAI30") {
        setCoupon(30);
        setCouponCode("");
      }
      if (couponCode === "MASAI20") {
        setCoupon(20);
        setCouponCode("");
      }
      if (couponCode === "MASAI90") {
        setCoupon(90);
        setCouponCode("");
      }
      if (couponCode === "MASAI70") {
        setCoupon(70);
        setCouponCode("");
      }
      toast({
        description: "Coupon code applied successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    } else {
      toast({
        description: "Please enter valid coupon code",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
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
            {/* <CartItem /> */}
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
                      base: "25%",
                      sm: "25%",
                      md: "25%",
                      lg: "20%",
                      xl: "20%",
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
                      lg: "80%",
                      xl: "80%",
                      "2xl": "80%"
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
                      {/* <Box border={"1px solid #CECEDF"}></Box> */}
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
            {/* <CartWithoutlogin /> */}
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
              coupon={coupon}
            />
            <SaleBox />
            <Flex
              padding="10px"
              border={"1px solid grey"}
              borderRadius="10px"
              boxShadow={"lg"}
              cursor={"pointer"}
              flexDirection="column"
            >
              <Flex justifyContent={"space-between"} gap="5">
                <Box w="80%">
                  <Input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    h={"14"}
                    fontSize="18px"
                  />
                </Box>
                <Box w="20%">
                  <Button
                    color="white"
                    backgroundColor={"#12daac"}
                    fontSize={"18px"}
                    padding="10px"
                    mt={"5px"}
                    onClick={handleSubmit}
                  >
                    Apply
                  </Button>
                </Box>
              </Flex>
            </Flex>

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

