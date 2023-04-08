import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import {
  Button,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const handleAddToCart = () => {
    const existingItem = cart.findIndex((item) => item._id === data._id);
    if (existingItem === -1) {
      data.quantity = 1;
      dispatch(addToCart(data));
      console.log(data);
      setTimeout(() => {
        navigate("/cartpage");
      }, 1000);
    } else {
      alert("Product Already Add in Cart");
    }
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(data));
    setTimeout(() => {
      navigate("/wishlist");
    }, 1000);
  };

  const fetchSingleProduct = () => {
    axios(`https://harlequin-fawn-tutu.cyclic.app/product/${id}`)
      .then((res) => setData(res.data.product))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <br />
      <br />

      <Grid
        gap={5}
        m="auto"
        w="95%"
        justifyContent="space-around"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)"
        }}
      >
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
          display={{ lg: "inherit", base: "none" }}
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={data.imageTsrc} />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
          w={{ lg: "100%", sm: "80%", base: "80%" }}
          m="auto"
        >
          <Image _hover={{ transform: "scale(1.1)" }} src={data.imageTsrc} />
        </GridItem>
        <GridItem
          p={5}
          colSpan={1}
          rowSpan={10}
          m="auto"
          justifyContent="center"
        >
          <Text
            color="gray.500"
            fontSize="md"
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          >
            {data.name}
          </Text>
          <Text
            my="10px"
            fontWeight={"700"}
            fontSize="xl"
            textTransform="capitalize"
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          >
            {data.productRefLink}
          </Text>
          <Text
            my="10px"
            fontWeight="600"
            color="gray.400"
            fontSize="20px"
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          >
            Size : Medium
          </Text>
          <Text
            my="10px"
            fontWeight="500"
            fontSize="25px"
            color="teal.500"
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          >
            ₹{data.price}{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "lighter",
                color: "#727297",
                textDecoration: "line-through",
                marginRight: "2%"
              }}
            >
              {"  "}₹{data.mPrice}{" "}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                color: "black"
              }}
            >
              {"  "}(₹{+data.mPrice - +data.price} with GST)
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
            onClick={handleAddToCart}
          >
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              gap="1"
              w={{ lg: "100%", sm: "50%", base: "50%" }}
            >
              <Text
                textAlign="center"
                fontSize={{ lg: "lg", md: "md", base: "sm" }}
              >
                BUY 1 GET 1 WITH GOLD MEMBERSHIP
              </Text>

              <Text fontSize="12px">
                (with 1 Year Warranty & 14 day Return)
              </Text>
            </Flex>
          </Button>
          <Button
            p={{ lg: 7, base: 0 }}
            m={{ lg: "10px 20px", base: "10px auto" }}
            w={{ lg: "90%", base: "100%" }}
            color="white"
            bgColor="#00bac6"
            onClick={handleAddToWishlist}
            fontSize={{ lg: "lg", md: "md", base: "sm" }}
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
            <Text ml="20" fontSize={{ lg: "lg", md: "md", base: "sm" }}>
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

          <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight="500">
                    Technical Information
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Product Id
                    </Box>
                    <Box>{data.productId}</Box>
                  </Flex>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Model No.
                    </Box>
                    <Box>LA E15301</Box>
                  </Flex>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Frame Size
                    </Box>
                    <Box>Narrow</Box>
                  </Flex>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Frame Width
                    </Box>
                    <Box>138 mm</Box>
                  </Flex>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Frame Dimensions
                    </Box>
                    <Box>{data.dimension}</Box>
                  </Flex>
                  <Flex gap="4">
                    <Box color="gray.400" fontWeight="500">
                      Frame colour
                    </Box>
                    <Box>{data.colors}</Box>
                  </Flex>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight="500">
                    Visit Nearby Store
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex gap="4" p="4">
                  <Image
                    src="https://static.lenskart.com/media/desktop/img/pdp/visit_store.png"
                    alt="img"
                  />
                  <Box color="gray.500">
                    <Text>Please Share Your Location To See Nearby Stores</Text>
                    <Text color="#52aba3" fontWeight="600">
                      Store Locator
                    </Text>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight="500">
                    Check Delivery Options
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input placeholder="Enter Pin Code" />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight="500">
                    Review
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textAlign="center" mb="4">
                  No Reviews
                </Text>

                <Button m="auto" w="100%" bg="#00bac6" color="white">
                  WRITE A REVIEW
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/1.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/3.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/4.gif" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/6.jpg" />

          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/7.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/8.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/9.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/10.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220765_206642.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220760_206642.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220978_206642.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15380-c3-eyeglasses_g_7595_21_12_2022.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15380-c3-eyeglasses_g_7591_image_pla_21_12_2022.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_G_7091.jpg" />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.imageTsrc} />
        </GridItem>
        <GridItem
          _hover={{ transform: "scale(1.1)" }}
          display={{ lg: "inherit", base: "none" }}
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.imageTsrc} />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default SingleProduct;
