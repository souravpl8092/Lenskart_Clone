import React from "react";
import { Box, Text, Image, HStack, Flex, Center } from "@chakra-ui/react";
/* import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci"; */

export const FooterCard1 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize="25px">{heading}</Text>
      <Box lineHeight="8">
        {type.map((i, index) => (
          <Box key={index}>
            <Text fontSize="15px" _hover={{ color: "whiteAlpha.600" }}>
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard2 = () => {
  return (
    <Box cursor="pointer" textAlign="center" m="auto">
      <Center>
        <Flex>
          <Image
            src="https://static.lenskart.com/media/desktop/img/play-store.svg"
            alt="img"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/app-store.svg"
            alt="img"
          />
        </Flex>
      </Center>
      <Center w="60%" m="auto">
        <Text>
          Download Lenskart App to buy Eyeglasses, Sunglasses and Contact Lenses
        </Text>
      </Center>
    </Box>
  );
};

export const FooterCard = () => {
  return (
    <Box>
      <HStack cursor="pointer" p="6" pl="10" justifyContent="">
        <Text pr="4" fontSize="14px">
          T&C
        </Text>
        <Text pr="4" fontSize="14px">
          Privacy
        </Text>
        <Text pr="4" fontSize="14px">
          Disclaimer
        </Text>
      </HStack>
      <HStack>FOLLOWS US AT</HStack>
      {/* <Grid
        templateColumns="repeat(3, 1fr)"
        m="auto"
        backgroundColor="#003380"
        color="white"
      >
        <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
          <AiFillFacebook size="20px" />
        </Box>
        <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
          <TfiTwitter size="20px" />
        </Box>
        <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
          <CiYoutube size="20px" />
        </Box>
      </Grid> */}
    </Box>
  );
};
