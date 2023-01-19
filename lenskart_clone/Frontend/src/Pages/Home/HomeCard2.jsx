import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
//import Heading from "./Heading";

const HomeCard2 = ({ type, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
      <Flex mt="7">
        <Box
          boxSize="sm"
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "40%",
            base: "none",
          }}
          cursor="pointer"
          pr="4"
        >
          <Image
            src={src}
            boxSize="320px"
            h="200px"
            w={{
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "400px",
              xl: "400px",
              base: "none",
            }}
          />
        </Box>
        <Spacer />
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "75%", base: "100%" }}
        >
          <Slider type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeCard2;
