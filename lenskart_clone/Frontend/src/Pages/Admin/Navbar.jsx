import React, { useContext } from "react";
import { Text, Box, Button, Flex, Avatar, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setisAuth } = useContext(AuthContext);
  const toast = useToast();

  const handleClick = () => {
    setisAuth(false);
    navigate("/");
    localStorage.removeItem("token");
    toast({
      title: "Success",
      description: "You have been logged out",
      status: "success",
      duration: 1000,
      isClosable: true
    });
  };
  return (
    <Flex justifyContent="space-between" bg="gray.500" w="100%" p="4">
      <Flex gap="4">
        <Avatar src="https://bit.ly/broken-link" size="md" />
        <Text color="whiteAlpha.900" fontSize="30px" fontWeight="700">
          Admin
        </Text>
      </Flex>
      <br />
      <br />

      <Flex gap="8">
        <Box
          fontWeight="500"
          color="whiteAlpha.900"
          borderRadius="lg"
          fontSize="22px"
          onClick={() => navigate("/productpost")}
          cursor="pointer"
        >
          Register Product
        </Box>
        <Box
          fontWeight="500"
          color="whiteAlpha.900"
          fontSize="22px"
          onClick={() => navigate("/productlist")}
          cursor="pointer"
        >
          Product List
        </Box>
        <Button
          colorScheme="red"
          fontSize="20px"
          onClick={handleClick}
          cursor="pointer"
        >
          Sign out
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
