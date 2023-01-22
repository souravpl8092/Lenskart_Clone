import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard1, NavbarCard2, NavbarCard4 } from "./NavbarCard";
import Menus from "./Menu";

const Navbar = () => {
  return (
    <Box>
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
        <NavbarCard1 />
        <NavbarCard2 />
        <NavbarCard4 />
      </Box>
      <Menus />
    </Box>
  );
};

export default Navbar;
