import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { getCartData } from ".";

const CouponBox = ({totalPrice}) => {
  const [couponCode, setCouponCode] = useState('');

  let validCoupons = "MASAI40"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validCoupons.includes(couponCode)) {
      alert("Coupon code applied!");
      totalPrice = totalPrice - 500;
      
    } else {
      alert("Invalid coupon code!");
    }
  };

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
  
    <form onSubmit={handleSubmit} >
      <Input 
        type="text" 
        placeholder="Enter coupon code" 
        value={couponCode} 
        onChange={(e) => setCouponCode(e.target.value)}  w="80" h={"20"} 
      />
      <Button type="submit" h={"20"} w="36" color="#333368">Apply</Button>
    </form>
</Flex>
</Flex>
      //   {/* <Heading as={"h1"} fontSize="14px" fontWeight={700}>
      //     Apply Coupon
      //   </Heading>
      //   <Text fontSize={"14px"} color="#333368">
      //     Check available offers
      //   </Text> */}
      
      // {/* <BsArrowRightCircle size={25} /> */}
    
  );
};

export default CouponBox;
