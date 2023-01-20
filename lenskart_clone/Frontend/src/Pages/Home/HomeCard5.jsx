import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

const HomeCard5 = ({ text, src }) => {
  return (
    <Box w="85%" m="auto">
      <Text fontSize="30px" pb="7" fontWeight="500">
        FIND THE PERFECT FIT
      </Text>
      <Flex>
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            alt="img"
            p="2"
          />
        </Box>
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="img"
            p="2"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeCard5;
