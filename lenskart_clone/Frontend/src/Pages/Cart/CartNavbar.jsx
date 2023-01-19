import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

export default function CartNavbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      bg="#fff"
      gap={{ base: "5" }}
      flexDirection={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      border={"0px solid grey"}
      boxShadow={"md"}
      paddingX={{
        base: "0",
        sm: "22",
        md: "32",
        lg: "",
        xl: "36",
        "2xl": "36",
      }}
      paddingRight={{
        base: "0",
        sm: "22",
        md: "",
        lg: "40",
        xl: "64",
        "2xl": "64",
      }}
    >
      <Box
        border={"0px solid black"}
        margin={{
          base: "auto",
          sm: "unset",
          md: "unset",
          lg: "unset",
          xl: "unset",
          "2xl": "unset",
        }}
      >
        <Link to="/">
          <img
            alt="glasscart logo"
            src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          />
        </Link>
      </Box>
      <Flex
        border={"0px solid blue"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
            alt="shield"
          />
        </Box>
        <Box
          fontSize="lg"
          lineHeight="24px"
          letterSpacing="-.02em"
          color="#66668e"
          fontWeight="400"
          ml="20px"
        >
          <Text>100% safe and secure</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
