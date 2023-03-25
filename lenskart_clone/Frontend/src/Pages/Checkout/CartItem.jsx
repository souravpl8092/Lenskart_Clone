import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function CartItem() {
  const { cart } = useSelector((state) => state.CartReducer);

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.mPrice * item.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <>
      <Flex flexDirection="column" w="350px" mt="10px">
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
        <Box className="itemPart" border="1px solid #ccc">
          {cart.map((el) => {
            return (
              <Box>
                <Box
                  className="item_container"
                  display="flex"
                  flexDirection="row"
                  gap={5}
                  alignItems="center"
                  m="auto"
                  mb="20px"
                  p={3}
                  fontSize="md"
                >
                  <Box>
                    <Image w="100px" src={el.imageTsrc} />
                  </Box>
                  <Box>
                    <Text>{"Qty : " + el.quantity}</Text>
                  </Box>
                  <Box>
                    <Text display="flex" gap={6}>
                      <Text color="#9999b3" fontWeight="500" fontSize="16px">
                        <s>{"₹" + el.mPrice}</s>
                      </Text>
                      <Text color="#000042" fontWeight="700">
                        {"₹" + el.price}
                      </Text>
                    </Text>
                  </Box>
                </Box>
                <Divider h={2} mb={2} />
              </Box>
            );
          })}
        </Box>
        <Box p={5} border="1px solid #ccc" bg="#EFEFEF">
          <Flex justifyContent={"space-between"} fontSize="16px">
            <Text fontWeight="bold">SUBTOTAL</Text>
            <Text fontWeight="medium">₹{getTotalPrice()}.00</Text>
          </Flex>
          <Divider h={2} mb={2} />
          <Flex justifyContent={"space-between"} fontSize="15px">
            <Text fontWeight="bold">TAX COLLECTED</Text>
            <Text fontWeight="medium">
              + ₹{Math.round(getTotalPrice() * 0.18)}.00
            </Text>
          </Flex>
          <Divider h={2} mb={2} />
          <Flex justifyContent={"space-between"}>
            <Text fontWeight="bolder" fontSize={18}>
              ORDER TOTAL
            </Text>
            <Text fontWeight="bold" fontSize={18} color="#329BA9">
              ₹{Math.round(getTotalPrice() + getTotalPrice() * 0.18)}.00
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
