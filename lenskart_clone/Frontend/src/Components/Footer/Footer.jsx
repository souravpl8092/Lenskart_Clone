import React from "react";
import { Box, Grid, Flex, Center } from "@chakra-ui/react";
import { FooterCard1, FooterCard2, FooterCard } from "./FooterCard";
import { services, about, helps } from "./FooterDetails";

const Footer = () => {
  return (
    <Box bgColor="#000042" color="whiteAlpha.900">
      <Flex justifyContent="space-between" textAlign="left" p="5">
        <Box w="60%" pl="5">
          <Grid templateColumns="repeat(3, 1fr)" gap={9}>
            <FooterCard1 type={services} heading="Services" />
            <FooterCard1 type={about} heading="About Us" />
            <FooterCard1 type={helps} heading="Help" />
          </Grid>
        </Box>
        <Center>
          <FooterCard2 />
        </Center>
      </Flex>
      <hr />
      <FooterCard />
    </Box>
  );
};


export default Footer;
