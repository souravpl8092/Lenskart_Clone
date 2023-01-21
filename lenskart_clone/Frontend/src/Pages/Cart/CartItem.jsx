import React from "react";
import {
  Flex,
  Heading,
  Button,
  Image,
  Text,
  Divider,
  Box,
  useToast,
} from "@chakra-ui/react";

const CartItem = ({ img_responsive, product_name, product_strike,id, DeleteRequest  }) => {
  const toast = useToast();
  return (
    <Flex
      gap={2}
      border={"0px solid grey"}
      borderRadius="10px"
      boxShadow={"lg"}
      padding={"15px"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <Image
        width={{
          base: "25%",
          sm: "25%",
          md: "25%",
          lg: "20%",
          xl: "20%",
          "2xl": "20%",
        }}
        margin={{
          base: "auto",
          sm: "auto",
          md: "auto",
          lg: "unset",
          xl: "unset",
          "2xl": "unset",
        }}
        src={img_responsive}
      />
      <Flex
        flexDirection={"column"}
        border={"0px solid blue"}
        gap="4"
        width={{
          base: "95%",
          sm: "95%",
          md: "95%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        margin={{
          base: "auto",
          sm: "auto",
          md: "auto",
          lg: "unset",
          xl: "unset",
          "2xl": "unset",
        }}
      >
        <Flex
          justifyContent={"space-between"}
          border={"0px solid green"}
          gap="20"
          marginTop={5}
        >
          <Heading
            as="h1"
            fontSize={"16px"}
            lineHeight="22px"
            textTransform={"capitalize"}
            letterSpacing="-0.32px"
            fontWeight={500}
          >
            {product_name}
          </Heading>
          <Flex gap={"2"}>
            <Text fontSize={"14px"}>{product_strike}</Text>
            {/* <Text color={"#0FBD95"} fontSize="14px" fontWeight={700}>
              Free
            </Text> */}
          </Flex>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex justifyContent={"space-between"}>
          <Heading
            as="h1"
            fontSize={"16px"}
            lineHeight="22px"
            textTransform={"capitalize"}
            fontWeight={500}
          >
            Final Price
          </Heading>
          <Flex gap={"2"}>
            <Text fontSize={"14px"}>{product_strike}</Text>
            {/* <Text color={"#0FBD95"} fontSize="14px" fontWeight={700}>
              Free
            </Text> */}
          </Flex>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex border={"0px solid grey"} gap="5">
          <Button
            backgroundColor={"white"}
            _hover={"backgroundColor:white"}
            textDecoration="underline"
            fontSize={"18"}
            ml="-1.5"
            onClick={() => {
              DeleteRequest(id)
                .then((response) => {
                  toast({
                    title: "Delete Item Successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top",
                  });
                })
                .catch((reject) => {
                  toast({
                    title: "Something Went Wrong",
                    description: `${reject.message}`,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom-right",
                  });
                });
            }}
          >
            Remove
          </Button>

        
          <Box border={"1px solid #CECEDF"}></Box>
          
          <Button
            backgroundColor={"white"}
            _hover={"backgroundColor:white"}
            textDecoration="underline"
            fontSize={"18"}
          >
            Repeat
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
// {/* <Heading as={"a"} fontSize="14px" textDecoration={"underline"}>
//             Repeat
//           </Heading> */}
  // {/* <Heading as={"a"} fontSize="14px" textDecoration={"underline"}>
  //           Remove
  //         </Heading> */}