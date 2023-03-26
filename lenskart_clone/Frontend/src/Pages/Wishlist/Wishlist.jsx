import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, Text, Button, Heading, Grid } from "@chakra-ui/react";
import { removeFromWishlist } from "../../redux/wishlist/wishlist.actions";
import { addToCart } from "../../redux/CartPage/action";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlistManager.wishlist);
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (item) => {
    dispatch(removeFromWishlist(item));
  };

  const handleAddToCart = (data) => {
    const existingItem = cart.findIndex((item) => item._id === data._id);
    if (existingItem === -1) {
      data.quantity = 1;
      dispatch(addToCart(data));
      dispatch(removeFromWishlist(data._id));
      console.log(data);
      setTimeout(() => {
        navigate("/cartpage");
      }, 1000);
    } else {
      alert("Product Already Add in Cart");
    }
  };

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Box minHeight="635" w="80%" m="auto">
        <Heading
          fontSize="25px"
          textAlign="left"
          p="2"
          bg="teal.400"
          color="whiteAlpha.900"
          w="80%"
          m="auto"
        >
          Wishlist
        </Heading>
        {wishlistItems.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            Your wishlist is empty.
          </Text>
        ) : (
          <Box>
            <Grid templateColumns="repeat(1,1fr)" gap={18} w={"100%"}>
              {wishlistItems &&
                wishlistItems &&
                wishlistItems.map((item) => (
                  <Box
                    key={item.id}
                    borderWidth="1px"
                    boxShadow="2xl"
                    p="4"
                    my="4"
                    w="80%"
                    m="auto"
                  >
                    <Flex justify="space-between" mb="2">
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {item.productRefLink}
                      </Text>
                      <Flex justify="space-between" mb="2" w="28%">
                        <Button
                          colorScheme="red"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(item._id)}
                        >
                          Remove
                        </Button>
                      </Flex>
                    </Flex>

                    <Flex align="center" mb="1">
                      <img
                        src={item.imageTsrc}
                        alt={item.name}
                        height="100"
                        width="180"
                      />

                      <Box ml="4">
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {item.name}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                          Price : ₹ {item.price}.00 /-
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          {item.productType}
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          Colour : {item.colors}
                        </Text>{" "}
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          Shape : {item.shape}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
            </Grid>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Wishlist;
