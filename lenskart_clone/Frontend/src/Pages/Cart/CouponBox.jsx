import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

const CouponBox = () => {
  return (
    <Flex
      padding="20px"
      border={"1px solid grey"}
      borderRadius="10px"
      boxShadow={"lg"}
      justifyContent="space-between"
      cursor={"pointer"}
    >
      <Flex flexDirection={"column"}>
        <Heading as={"h1"} fontSize="14px" fontWeight={700}>
          Apply Coupon
        </Heading>
        <Text fontSize={"14px"} color="#333368">
          Check available offers
        </Text>
      </Flex>
      <BsArrowRightCircle size={25} />
    </Flex>
  );
};

export default CouponBox;
