import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PriceDetail({ totalPrice, discountPrice }) {
  const [finaltotal, setFinalTotal] = useState(0);

  const { coupon } =
    useSelector((state) => state.CartReducer);

  useEffect(() => {
    setFinalTotal(totalPrice - discountPrice - coupon);
  }, [totalPrice, discountPrice]);
  return (
    <Flex
      flexDirection={"column"}
      boxShadow="xl"
      border="1px solid grey"
      borderRadius={"10px"}
      gap="3"
      padding={"5px"}
      cursor={"pointer"}
    >
      <Flex
        gap={"4"}
        flexDirection="column"
        padding={"10px"}
        border="0px solid red"
      >
        <Flex
          gap="50px"
          border="0px solid green"
          justifyContent="space-between"
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total Price
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {totalPrice}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total Discount
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {discountPrice}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Coupon
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="green.900"
          >
            ₹{coupon}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Convenience Fees
          </Heading>
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="#0FBD95"
          >
            Free
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"18px"}
            fontWeight="600"
            fontFamily={"Inter"}
          >
            Total payable
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="600"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {finaltotal}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PriceDetail;
