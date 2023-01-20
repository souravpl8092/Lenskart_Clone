import React from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Input,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

export const NavbarCard1 = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Flex gap={2} pl={5} pt={2}>
        {type.map((i, index) => (
          <Box key={index}>
            <Text fontSize="12px" _hover={{ color: "whiteAlpha.600" }}>
              {i.labels}
            </Text>
            <Spacer />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export const NavbarCard2 = () => {
  return (
    <Box cursor="pointer">
      {/* <Image src="https://i.imgur.com/nQ34FHp.png" alt="logo" w="10%"/> */}
      <HStack m="auto">
        <Box w="20%">
          <Image src="https://i.imgur.com/OHxtfjd.png" alt="logo" w="75%" />
        </Box>
        <HStack w="85%" m="auto">
          <Box w="15%">
            <HStack fontSize="18px" fontWeight="bold">
              <FiPhoneCall />
              <Text>1800-111-111</Text>
            </HStack>
          </Box>
          <Box w="60%" mr="10%">
            <Input
              placeholder="What are you looking for"
              size="md"
              border="1px solid black"
              w="90%"
            />
          </Box>
          <HStack w="35%" spacing="24px" pr="5">
            <Button size="sm" bg="whiteAlpha.900">
              Track Order
            </Button>
            <Login />
            <Signup />
            <Button leftIcon={<CiHeart />} size="sm" bg="whiteAlpha.900">
              Wishlist
            </Button>
            <Button leftIcon={<CgShoppingCart />} size="sm" bg="whiteAlpha.900">
              Cart
            </Button>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCard4 = ({ type }) => {
  return (
    <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
      <Flex gap={4} pl={5} pt={2} justifyContent="space-between">
        {type.map((i, index) => (
          <Box key={index}>
            <Link
              fontSize="16px"
              fontWeight="500"
              _hover={{ textDecoration: "underline" }}
            >
              {i.labels}
            </Link>
            <Spacer />
          </Box>
        ))}
        <HStack w="20%" ml="5%">
          <Image
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="img1"
            w="25%"
            borderRadius="base"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="img1"
            w="25%"
            borderRadius="base"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
            alt="img1"
            w="25%"
            borderRadius="base"
          />
        </HStack>
      </Flex>
    </Box>
  );
};
