import React, { useState } from "react";
import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";
import { coupon } from "../../redux/CartPage/action";
import { useDispatch } from "react-redux";

const CouponBox = () => {
  const [couponCode, setCouponCode] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode !== "") {
      dispatch(coupon(couponCode));
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
        <Box
          w={{
            xl: "70%",
            lg: "60%",
            md: "80%",
            sm: "80%",
            base: "70%"
          }}
        >
          <Input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            h={"12"}
            fontSize="16px"
          />
        </Box>
        <Box
          w={{
            xl: "30%",
            lg: "40%",
            md: "20%",
            sm: "20%",
            base: "30%"
          }}
        >
          <Button
            color="white"
            backgroundColor={"#12daac"}
            fontSize={"16px"}
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
