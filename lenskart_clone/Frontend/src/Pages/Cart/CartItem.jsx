import React from "react";
import {
  Flex,
  Heading,
  Button,
  Image,
  Text,
  Box,
  useToast
} from "@chakra-ui/react";
import {
  removeFromCart,
  decrement,
  increment
} from "../../redux/CartPage/action";
import { useDispatch } from "react-redux";

const CartItem = ({ imageTsrc, handleDelete }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  /* const handleDelete = () => {
    dispatch(DeleteData(id));
    setChange(!change);
    toast({
      description: "Product deleted successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top"
    });
  };

  const handleRepeat = () => {
    const data = {
      img_responsive,
      product_name,
      product_strike,
      id,
      product_discountedPrice
    };
    dispatch(repeatData(data));
    setChange(!change);

    toast({
      description: "Product repeated successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top"
    });
  }; */

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementChange = (id, qty) => {
    if (qty === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrement(id));
    }
  };

  const handleIncrementChange = (id) => {
    dispatch(increment(id));
  };

  return (
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
        src={imageTsrc}
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
        <Flex border={"0px solid grey"} gap="5" justifyContent="space-between">
          <Button
            backgroundColor={"white"}
            _hover={"backgroundColor:white"}
            textDecoration="underline"
            fontSize={"18"}
            ml="-1.5"
            onClick={() => handleDelete(handleDelete)}
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
              onClick={() => handleDecrementChange(item.id, item.quantity)}
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
  );
};

export default CartItem;
