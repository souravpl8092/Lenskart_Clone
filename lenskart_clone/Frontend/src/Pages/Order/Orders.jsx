import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { cartReset } from "../../redux/CartPage/action";
import { addToOrder } from "../../redux/order/order.actions";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Switch
} from "@chakra-ui/react";

const Orders = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.mPrice * item.quantity,
      0
    );
    return totalPrice;
  };

  const handleClick = () => {
    dispatch(addToOrder(cart));
    navigate("/confirm");
    dispatch(cartReset());
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;

  return (
    <Box>
      <Navbar />
      <Box w="90%" m="auto">
        <HStack spacing={"100px"} mt="15px" mb="20px">
          <HStack>
            <Image
              src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
              w={"40px"}
              h="40px"
            />
            <Box fontSize={"16px"} fontWeight="400">
              Get Orders Updates on Whatsapp
            </Box>
            <Switch size="lg" />
          </HStack>
          <Spacer />
        </HStack>
        <Box border={"1px"} borderColor="gray.300">
          <Box p={"10px 10px 10px 10px "} m="15px 0px 0px 15px" w="97%">
            <Flex justifyContent={"space-between"}>
              <Flex gap="5">
                <Flex>
                  <Box fontSize={"15px"} fontWeight="400">
                    Order ID :
                  </Box>

                  <Box
                    fontSize={"14px"}
                    ml="3px"
                    letterSpacing="1.5px"
                    fontWeight={"500"}
                  >
                    {Math.round(Math.random() * 1125452 + Math.random())}
                  </Box>
                </Flex>

                <Flex>
                  <Box fontSize={"15px"} fontWeight="400">
                    Order Date :
                  </Box>
                  <Box
                    fontSize={"14px"}
                    ml="3px"
                    letterSpacing="1.5px"
                    fontWeight={"500"}
                  >
                    {currentDate}
                  </Box>
                </Flex>
              </Flex>
              <Flex>
                <Box fontSize={"16px"} fontWeight="400">
                  Total Price :
                </Box>

                <Box
                  fontSize={"17px"}
                  ml="3px"
                  letterSpacing="1.5px"
                  fontWeight={"500"}
                >
                  {getTotalPrice()}.00
                </Box>
              </Flex>
            </Flex>
            <HStack
              mt={"20px"}
              p="10px"
              spacing={""}
              w="100%"
              justifyContent="space-between"
            >
              <Box w="50%">
                <Box fontWeight={"500"} fontSize="17px">
                  Complete Your Payment
                </Box>
                <Box
                  fontWeight={"350"}
                  fontSize="15px"
                  flexWrap={"nowrap"}
                  display="flex"
                >
                  Order will be processed after payment
                </Box>
              </Box>
              <HStack w="50%" justifyContent="space-between">
                <Button
                  fontSize={"15px"}
                  ml="60%"
                  bg="#3bb3a9"
                  color={"white"}
                  borderRadius="4px"
                  p="15px 35px 15px 35px "
                  _hover={{ backgroundColor: "teal" }}
                  onClick={() => navigate("/payment")}
                >
                  PAY NOW
                </Button>
                <Button
                  fontSize={"15px"}
                  ml="60%"
                  bg="#3bb3a9"
                  color={"white"}
                  borderRadius="4px"
                  p="15px 35px 15px 35px "
                  _hover={{ backgroundColor: "teal" }}
                  onClick={handleClick}
                >
                  CASH ON DELIVERY
                </Button>
              </HStack>
            </HStack>
          </Box>
        </Box>
        <HStack border={"1px"} p="10px 10px 10px 25px" borderColor="gray.300">
          <Image
            mr="10px"
            src="https://static.lenskart.com/media/mobile/universal/assets/status-pending.png"
            alt="warning"
          />
          <Box>
            <Box color={"red"} fontWeight="500" fontSize={"15px"}>
              Payment Pending
            </Box>
            <Box color={"gray"} fontSize="15px">
              Complete your payment to process order
            </Box>
          </Box>
        </HStack>
        {cart.map((el) => {
          return (
            <Box border={"1px"} borderColor="gray.300">
              <HStack color="gray.600">
                <Image
                  src={el.imageTsrc}
                  w={"200px"}
                  h="100px"
                  m="10px 0px 10px 20px"
                />
                <Box>
                  <Box
                    m="10px 0px 5px 0px"
                    fontSize="17px"
                    textTransform="capitalize"
                    color="gray.500"
                    fontWeight="bold"
                  >
                    {el.productRefLink || "Vincent Chase Eyeglasses"}
                  </Box>
                  <Box fontSize="15px" mb="4px" fontWeight="500">
                    + Hydrophobic Anti-Glare
                  </Box>
                  <Box
                    fontSize="14px"
                    mb={"6px"}
                    color={"gray"}
                    fontWeight={"500"}
                  >
                    Sold by Lenskart Pvt Ltd.
                  </Box>
                  <Box fontWeight={"500"} fontSize="18px" mb="5">
                    ₹ {el.price || 1904.0}.00
                  </Box>
                </Box>
              </HStack>
            </Box>
          );
        })}

        <br />
        <br />
        <br />
        <br />
      </Box>
      <Footer />
    </Box>
  );
};

export default Orders;
