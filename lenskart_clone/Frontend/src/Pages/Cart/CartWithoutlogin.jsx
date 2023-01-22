import React from "react";
import { Container, Text, Heading, Flex } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";


const CartWithoutlogin = () => {
  return (
    <Flex
      border={"1px solid grey"}
      borderRadius="10px"
      boxShadow={"lg"}
      padding={"15px"}
      fontSize="16"
      justifyContent="space-between"
    >
      <Text>Login to see items from your existing bag and wishlist</Text>
      <BsArrowRightCircle size={25} />
    </Flex>
  );
};

export default CartWithoutlogin;
