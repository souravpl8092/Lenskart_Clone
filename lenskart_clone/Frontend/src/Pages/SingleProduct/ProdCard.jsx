import React from "react";
import ProdDetails from "./ProdDetails";
import { ProdImage1 } from "./ProdImage";
import { Button, Image, Text, Flex, Box } from "@chakra-ui/react";

const ProdCard = ({ type, handleCart, handleWishlist }) => {
  return (
    <Box>
      <Text
        color="gray.500"
        fontSize="md"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        {type.name}
      </Text>
      <Text
        my="10px"
        fontWeight={"700"}
        fontSize="lg"
        textTransform="capitalize"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        {type.productRefLink}
      </Text>
      <Text
        my="10px"
        fontWeight="600"
        color="gray.400"
        fontSize="15px"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        Size : Medium
      </Text>
      <Text
        my="10px"
        fontWeight="500"
        fontSize="18px"
        color="teal.500"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        ₹{type.price}{" "}
        <span
          style={{
            fontSize: "18px",
            fontWeight: "lighter",
            color: "#727297",
            textDecoration: "line-through",
            marginRight: "2%"
          }}
        >
          {"  "}₹{type.mPrice}{" "}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            color: "black"
          }}
        >
          {"  "}(₹{+type.mPrice - +type.price} with GST)
        </span>
      </Text>
      <Text
        mt="-4"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        Frame + Lens
      </Text>
      <br />

      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={handleCart}
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="1"
          w={{ lg: "100%", sm: "50%", base: "50%" }}
        >
          <Text
            textAlign="center"
            fontSize={{ lg: "md", md: "md", base: "sm" }}
          >
            BUY 1 GET 1 WITH GOLD MEMBERSHIP
          </Text>

          <Text fontSize="12px">(with 1 Year Warranty & 14 day Return)</Text>
        </Flex>
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={handleWishlist}
        fontSize={{ lg: "md", md: "md", base: "sm" }}
      >
        Add to Wishlist
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        bg="whiteAlpha.900"
        border="1px"
        borderColor="gray.400"
      >
        <Text ml="20" fontSize={{ lg: "md", md: "md", base: "sm" }}>
          Try On
        </Text>
        <Image
          src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
          alt="img"
          ml="20"
        />
      </Button>
      <br />
      <br />

      <ProdDetails type={type} />

      {ProdImage1.map((ele, i) => (
        <Image src={ele.src} key={i} />
      ))}
    </Box>
  );
};

export default ProdCard;
