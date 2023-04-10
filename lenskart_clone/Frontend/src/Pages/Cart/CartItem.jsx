import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decrement,
  increment
} from "../../redux/CartPage/action";
import {
  Flex,
  Heading,
  Button,
  Image,
  Text,
  Box,
  Grid
} from "@chakra-ui/react";

const CartItem = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

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
    <Box>
      {cart &&
        cart &&
        cart.map((item) => (
          <Grid
            templateColumns={{
              lg: "20% 80%",
              md: "20% 80%",
              base: "repeat(1, 1fr)"
            }}
            gap={6}
            border={"0px solid grey"}
            borderRadius="10px"
            boxShadow={"lg"}
            padding={"15px"}
            w="100%"
            justifyContent="space-between"
          >
            <Image
              w={{
                base: "60%",
                sm: "50%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%"
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
                base: "90%",
                sm: "90%",
                md: "90%",
                lg: "90%",
                xl: "90%",
                "2xl": "90%"
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
                  <Text fontSize={"18px"} fontWeight="500" color="gray.600">
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
                  <Text fontSize={"18px"} fontWeight="500" color="gray.600">
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
          </Grid>
        ))}
    </Box>
  );
};

export default CartItem;
