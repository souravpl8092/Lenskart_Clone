import { useSelector } from "react-redux";
import { Box, Text, Stack, Heading, Flex, Image, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const OrderHistory = () => {
  const orders = useSelector((store) => store.orderManager.order);
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;

  return (
    <Box>
      <Navbar />
      <br />

      <Box minHeight="635" p={8} w="70%" m="auto">
        <Heading
          fontSize="25px"
          mt="1%"
          textAlign="left"
          p="2"
          bg="teal.400"
          color="whiteAlpha.900"
        >
          Order History
        </Heading>
        {orders.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            No Order History Found
          </Text>
        ) : (
          <Stack spacing={4}>
            {orders &&
              orders &&
              orders.map(
                (order, i) =>
                  order.id && (
                    <Grid
                      key={order.id}
                      borderRadius="20px 20px 20px 20px"
                      fontSize="16px"
                      textAlign="center"
                    >
                      <Link to={`/products/${order.id}`}>
                        <Flex
                          key={order.id + i + Math.random()}
                          bg="gray.50"
                          p={4}
                          boxShadow="dark-lg"
                          gap="5"
                          color="gray.600"
                        >
                          <Box>
                            <Image src={order.imageTsrc} boxSize="180px" />
                          </Box>
                          <Box textAlign="left">
                            <Text fontWeight="bold">
                              Order ID: {order.productId}
                            </Text>
                            <Text fontWeight="600">
                              Order Date : {currentDate}
                            </Text>
                            <Text
                              fontSize="18px"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              {order.productRefLink}
                            </Text>
                            <Text
                              textTransform="capitalize"
                              fontWeight="500"
                              fontSize="17px"
                            >
                              {order.productType}
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                              Price: ₹ {order.price}.00 /-
                            </Text>
                            <Text fontWeight="500" fontSize="15px">
                              Quantity: ₹ {order.quantity} pcs
                            </Text>
                            <Text fontWeight="500" fontSize="15px">
                              Colors : {order.colors}
                            </Text>
                            <Text fontWeight="500" fontSize="15px">
                              Dimension : {order.dimension}
                            </Text>
                            <Text fontWeight="500" fontSize="15px">
                              Status : Delivered
                            </Text>
                          </Box>
                        </Flex>
                      </Link>
                    </Grid>
                  )
              )}
          </Stack>
        )}
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default OrderHistory;
