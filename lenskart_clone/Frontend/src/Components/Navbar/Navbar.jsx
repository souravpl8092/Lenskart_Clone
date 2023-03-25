import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard1, NavbarCard2, NavbarCard4 } from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Box overflow="hidden" bg="white">
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
        <NavbarCard1 />
        <NavbarCard2 />
        <NavbarCard4 />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;
