import React from "react";
import CartNavbar from "./CartNavbar";
import { Container, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { useNavigate} from "react-router-dom";

const CartEmpty = () => {
    const navigate=useNavigate();
  return (
    <>
    <CartNavbar />
    <Container border={"0px solid red"} mt="80" >
      
      <Heading as="h1" fontWeight={"500"} fontFamily="sans-serif" fontSize={"25"}>
        Your shopping cart is empty !
      </Heading>
      <Button
        backgroundColor={"#12daac"}
        color="#091e52"
        borderRadius={"20px"}
        padding="16px 24px 16px 24px"
        fontSize={"16px"}
        height="56px"
        fontWeight={"700"}
        mt="10" 
        ml={"20"}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
      </Container>
    </>
  );
};

export default CartEmpty;
