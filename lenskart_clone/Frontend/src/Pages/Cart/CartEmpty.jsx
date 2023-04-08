import React from "react";
import { Heading, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        flexDirection="column"
        margin="auto"
        border={"0px solid red"}
        marginTop="20"
        marginBottom="20"
        gap="5"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h1"
          fontWeight={"500"}
          fontFamily="sans-serif"
          fontSize={"18px"}
        >
          Your shopping cart is empty !
        </Heading>
        <Button
          backgroundColor={"#12daac"}
          color="#FFFFFF"
          _hover={{
            backgroundColor: "#12daac",
            color: "#FFFFFF"
          }}
          borderRadius={"10px"}
          padding="15px"
          fontSize={"16px"}
          w="64"
          fontWeight={"700"}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </Flex>
    </>
  );
};

export default CartEmpty;
