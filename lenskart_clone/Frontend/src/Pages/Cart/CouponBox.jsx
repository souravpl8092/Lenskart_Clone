import React, { useState } from "react";
import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";

const CouponBox = ({ setChange, change }) => {
  const [couponCode, setCouponCode] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode !== "") {
      if (couponCode !== "MASAI40") {
        setCouponCode(40);
      }
      if (couponCode !== "MASAI90") {
        setCouponCode(90);
      }
      if (couponCode !== "MASAI30") {
        setCouponCode(30);
      }
      if (couponCode !== "MASAI20") {
        setCouponCode(20);
      }
      if (couponCode !== "MASAI90") {
        setCouponCode(90);
      }
      if (couponCode !== "MASAI70") {
        setCouponCode(70);
      }
      toast({
        description: "Coupon code applied successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    } else {
      toast({
        description: "Please enter valid coupon code",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
  };

  return (
    <Flex
      padding="10px"
      border={"1px solid grey"}
      borderRadius="10px"
      boxShadow={"lg"}
      cursor={"pointer"}
      flexDirection="column"
    >
      <Flex justifyContent={"space-between"} gap="5">
        <Box w="80%">
          <Input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            h={"14"}
            fontSize="18px"
          />
        </Box>
        <Box w="20%">
          <Button
            color="white"
            backgroundColor={"#12daac"}
            fontSize={"18px"}
            padding="10px"
            mt={"5px"}
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CouponBox;
