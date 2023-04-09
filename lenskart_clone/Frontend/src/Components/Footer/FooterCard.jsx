import React from "react";
import { Box, Text, Image, Flex, Center, Grid } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";

export const FooterCard1 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize="25px">{heading}</Text>
      <Box lineHeight="8">
        {type.map((i, index) => (
          <Box key={index}>
            <Text
              fontSize="15px"
              _hover={{ color: "whiteAlpha.600" }}
              lineHeight="2"
            >
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
        <Grid
          gap="2"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(2,1fr)"
          }}
        >
          <Image
            src="https://static.lenskart.com/media/desktop/img/play-store.svg"
            alt="img"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/app-store.svg"
            alt="img"
          />
        </Grid>
      </Center>
      <br />
      <Center w="60%" m="auto" fontSize="14px">
        <Text>
          Download Lenskart App to buy Eyeglasses, Sunglasses and Contact Lenses
        </Text>
      </Center>
    </Box>
  );
};

export const FooterCard = () => {
  return (
    <Grid
      templateColumns="repeat(2,1fr)"
      justifyContent="space-between"
      m="auto"
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(3,1fr)"
        }}
        cursor="pointer"
        p="2%"
        pl="6%"
        w="35%"
        lineHeight="10"
        gap="10%"
        pb={{ lg: "2%", sm: "4%", base: "10%" }}
      >
        <Text fontSize="14px">T&C</Text>
        <Text fontSize="14px">Privacy</Text>
        <Text fontSize="14px">Disclaimer</Text>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)"
        }}
        m="auto"
        color="white"
        gap="2"
        textAlign="left"
      >
        <Text fontSize="16px" fontWeight="500">
          FOLLOWS US AT
        </Text>
        <Flex gap="2">
          <AiFillFacebook size="30px" />
          <AiOutlineInstagram size="30px" />
          <TfiTwitter size="30px" />
        </Flex>
      </Grid>
    </Grid>
  );
};
