import React, { useContext } from "react";
import {
  Text,
  Box,
  Button,
  Flex,
  Avatar,
  useToast,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Stack,
  useMediaQuery,
  Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      {isLargerThan768 ? (
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
      ) : (
        <>
          <Button
            onClick={onOpen}
            variant="ghost"
            fontSize="2xl"
            bg="blue.900"
            mr="5"
          >
            <Image
              w={6}
              src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
            />
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontSize="2xl" borderBottom="2px solid #18CFA8">
                GlassCart
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4} fontSize="lg">
                  <Link to="/productpost">
                    <Text>Register Product</Text>
                  </Link>
                  <Link to="/productlist">
                    <Text>Product List</Text>
                  </Link>
                </Stack>
              </DrawerBody>
              <DrawerFooter bg="whiteAlpha.900">
                <Button
                  colorScheme="red"
                  fontSize="20px"
                  onClick={handleClick}
                  cursor="pointer"
                >
                  Sign out
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
