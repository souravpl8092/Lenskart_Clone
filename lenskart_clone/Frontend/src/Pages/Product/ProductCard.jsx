import { Link } from "react-router-dom";
import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ type }) => {
  return (
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)"
      }}
      height="100vh"
      gap={6}
    >
      {type.map((ele) => (
        <GridItem>
          <Link to={`/products/${ele._id}`}>
            <Box
              position="relative"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="3%"
              p="10px"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
              mb="7"
            >
              <Box>
                <Image
                  m="auto"
                  width="80%"
                  src={ele.imageTsrc}
                  alt="image"
                  _hover={{ transform: "scale(1.1)" }}
                />
                <br />
                <br />
                <br />

                <Box p="10px">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Flex
                      w="25%"
                      borderRadius="20px"
                      alignItems="center"
                      gap="5px"
                      p="5px 10px"
                      bgColor="#eeeef5"
                      fontSize="15px"
                    >
                      <Text>
                        {ele.rating
                          ? ele.rating
                          : (Math.random() * (5 - 1) + 1).toFixed(1)}
                      </Text>
                      <AiFillStar size="15px" color="#0fbd95" />
                      <Text>
                        {ele.userRated
                          ? ele.userRated
                          : Math.floor(Math.random() * 999 + 1)}
                      </Text>
                    </Flex>
                  </Flex>

                  <Text
                    mt="5px"
                    fontWeight="700"
                    color="#000042"
                    fontSize="15px"
                    textTransform="capitalize"
                  >
                    {ele.productRefLink}{" "}
                  </Text>
                  <Text
                    mt="5px"
                    fontWeight="400"
                    color="gray.400"
                    fontSize="14px"
                  >
                    {ele.name}{" "}
                  </Text>
                  <Text
                    mt="5px"
                    fontWeight="400"
                    color="#000042"
                    fontSize="14px"
                  >
                    Shape : {ele.shape}
                  </Text>
                  <Text
                    mt="5px"
                    fontWeight="bold"
                    color="#gray.700"
                    fontSize="15px"
                  >
                    ₹{ele.price}{" "}
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "lighter",
                        color: "#727297",
                        textDecoration: "line-through"
                      }}
                    >
                      {"  "}₹{ele.mPrice}
                    </span>
                    <span
                      style={{
                        color: "#727297",
                        fontSize: "15px",
                        fontWeight: "lighter"
                      }}
                    >
                      {"  "}(+tax)
                    </span>
                  </Text>
                </Box>
              </Box>
              <Box
                fontSize="15px"
                color="#cbb881"
                w="100%"
                padding="2"
                fontWeight="bold"
                bgGradient="linear(to-r,  #f8f2e0, yellow.50)"
              >
                BUY1 GET1 +10% OFF
              </Box>
            </Box>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductCard;
