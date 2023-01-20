import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const HomeCard4 = ({ text, src }) => {
  return (
    <Box mt="-20">
      <Text fontSize="30px" pb="7" fontWeight="500">
        {text}
      </Text>
      <Image src={src} alt="img" />
    </Box>
  );
};

export const HomeCard4a = ({ text, src }) => {
  return (
    <Box mt="-20">
      <Text fontSize="30px" pb="7" fontWeight="500">
        {text}
      </Text>
      <Image src={src} alt="img" w="85%" m="auto" />
    </Box>
  );
};
