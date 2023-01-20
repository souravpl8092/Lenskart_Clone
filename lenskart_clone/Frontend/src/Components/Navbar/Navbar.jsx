import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard1, NavbarCard2, NavbarCard4 } from "./NavbarCard";
import { NavbarDetail1, NavbarDetail2 } from "./NavbarDetail";

const Navbar = () => {
  return (
    <Box>
      <NavbarCard1 type={NavbarDetail1} />
      <NavbarCard2 />
      <NavbarCard4 type={NavbarDetail2} />
    </Box>
  );
};

export default Navbar;
