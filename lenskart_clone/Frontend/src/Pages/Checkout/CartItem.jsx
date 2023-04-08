import { Box, Flex, Text, Image, Divider, Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function CartItem() {
  const { cart, coupon } = useSelector((state) => state.CartReducer);

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <>
      <Flex flexDirection="column" mt="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          bg="#4B4C51"
          color="#fff"
        >
          <Text ml="5px" fontSize="md">
            SHOPPING CART:
          </Text>
          <Text mr="5px" fontSize="md">
            Item {cart.length}
          </Text>
        </Box>
        <Box border="1px solid #ccc">
          {cart.map((el) => (
            <Box>
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(1,1fr)",
                  md: "35% 60%",
                  lg: "35% 60%"
                }}
                justifyContent={{
                  lg: "space-between",
                  md: "center",
                  sm: "center",
                  base: "center"
                }}
                gap={5}
                alignItems="center"
                m="auto"
                mb="20px"
                p={3}
                fontSize="md"
              >
                <Box>
                  <Image
                    h={{ lg: "60px", md: "60px", sm: "70px", base: "70px" }}
                    w="100px"
                    src={el.imageTsrc}
                    m="auto"
                  />
                </Box>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(2,1fr)"
                  }}
                  justifyContent={{
                    lg: "space-between",
                    md: "center",
                    sm: "center",
                    base: "center"
                  }}
                  columnGap="8"
                  m="auto"
                >
                  <Box>
                    <Text
                      textAlign={{ lg: "left", sm: "center", base: "center" }}
                    >
                      {"Qty : " + el.quantity}
                    </Text>
                  </Box>
                  <Box>
                    <Flex
                      gap={6}
                      m="auto"
                      textAlign={{ lg: "left", sm: "center", base: "center" }}
                    >
                      <Text color="#9999b3" fontWeight="500" fontSize="16px">
                        <s>{"₹" + el.mPrice}</s>
                      </Text>
                      <Text color="#000042" fontWeight="700">
                        {"₹" + el.price}
                      </Text>
                    </Flex>
                  </Box>
                </Grid>
              </Grid>

              <Divider h={2} mb={2} />
            </Box>
          ))}
        </Box>
        <Box p={5} border="1px solid #ccc" bg="#EFEFEF">
          <Flex justifyContent={"space-between"} fontSize="16px">
            <Text fontWeight="bold">COUPON</Text>
            <Text fontWeight="medium"> - ₹{coupon || 0}.00</Text>
          </Flex>
          <Divider h={2} mb={2} />
          <Flex justifyContent={"space-between"} fontSize="16px">
            <Text fontWeight="bold">SUBTOTAL</Text>
            <Text fontWeight="medium">
              ₹{getTotalPrice() - (coupon || 0)}.00
            </Text>
          </Flex>
          <Divider h={2} mb={2} />
          <Flex justifyContent={"space-between"} fontSize="15px">
            <Text fontWeight="bold">TAX COLLECTED</Text>
            <Text fontWeight="medium">
              + ₹{Math.round((getTotalPrice() - (coupon || 0)) * 0.18)}.00
            </Text>
          </Flex>
          <Divider h={2} mb={2} />
          <Flex justifyContent={"space-between"}>
            <Text fontWeight="bolder" fontSize={18}>
              ORDER TOTAL
            </Text>
            <Text fontWeight="bold" fontSize={18} color="#329BA9">
              ₹
              {Math.round(
                getTotalPrice() -
                  (coupon || 0) +
                  (getTotalPrice() - (coupon || 0)) * 0.18
              )}
              .00
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
