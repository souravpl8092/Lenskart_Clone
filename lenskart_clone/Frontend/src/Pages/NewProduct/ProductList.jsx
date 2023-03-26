import { TbArrowsUpDown } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../Admin/Pagination";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Select,
  Switch,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [types, setTypes] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [gender, setGender] = useState("");
  const [productRef, setProductRef] = useState("");
  let loader = [1, 2, 3, 4, 5, 6];

  const FrameType = ({ src, type, stylefilter, name, setfilter }) => {
    return (
      <Box
        onClick={() => stylefilter(name)}
        mr="3px"
        border="1px solid"
        borderColor="gray.300"
        _hover={{ border: "5px solid gray" }}
      >
        <Image m="7px auto" width="70px" src={src} />
        <Text mx="5px" textAlign="center" fontSize="15px" color="gray.500">
          {type}
        </Text>
      </Box>
    );
  };

  const fetchproduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://harlequin-fawn-tutu.cyclic.app/product?sort=${sort}&productRefLink=${productRef}&productType=${types}&gender=${gender}&page=${page}`
      );
      const postData = await response.json();
      setProducts(postData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, [page, sort, gender, types, productRef]);

  const handleClick = (value) => {
    setProductRef(value);
  };

  const handleClick2 = (value) => {
    setProductRef(value);
  };

  const handleClick4 = (value) => {
    setProductRef(value);
  };

  return (
    <>
      <Navbar />
      <Box>
        <Image
          src="https://static1.lenskart.com/media/desktop/img/Mar23/spring/home/PLP%20Camapaign%20-%20WEB_1.jpg"
          alt="img"
          w="96%"
          m="auto"
        />
        <Flex m="0" px="2%" gap="4" cursor="pointer">
          <Box w="17%" m={0}>
            <Box mb="20px">
              <br />
              <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="17px">
                FRAME TYPE
              </Text>
              <Grid templateColumns="repeat(3, 1fr)">
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                  type="Full Rim"
                  name="Full Rim"
                  stylefilter={handleClick}
                />
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                  type="Half Rim"
                  name="Half Rim"
                  stylefilter={handleClick}
                />
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                  type="Rimless"
                  name="Rimless"
                  stylefilter={handleClick}
                />
              </Grid>
            </Box>

            <Box mb="20px">
              <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="17px">
                FRAME SHAPE
              </Text>
              <Grid templateColumns="repeat(3, 1fr)">
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    type="Rectangle"
                    name="Rectangle"
                    stylefilter={handleClick2}
                  />
                </GridItem>

                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    name="Round"
                    type="Round"
                    stylefilter={handleClick2}
                  />
                </GridItem>
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    type="Cat Eye"
                    name="Cateye"
                    stylefilter={handleClick2}
                  />
                </GridItem>
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    type="Square"
                    name="Square"
                    stylefilter={handleClick2}
                  />
                </GridItem>

                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    type="Tinted "
                    name="Tinted "
                    stylefilter={handleClick2}
                  />
                </GridItem>

                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                    type="Wayfarer"
                    name="Wayfarer"
                    stylefilter={handleClick2}
                  />
                </GridItem>
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    type="Aviator"
                    name="Aviator"
                    stylefilter={handleClick2}
                  />
                </GridItem>
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                    type="Hexagon"
                    name="Hexagon"
                    stylefilter={handleClick2}
                  />
                </GridItem>
                <GridItem>
                  <FrameType
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                    type="Butterfly"
                    name="Butterfly"
                    stylefilter={handleClick2}
                  />
                </GridItem>
              </Grid>
            </Box>
            <VStack mb="20px" alignItems="flex-start" color="gray.500">
              <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="17px">
                FRAME COLOR
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("Black")}
              >
                Black{" "}
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("Blue")}
              >
                Blue{" "}
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("White")}
              >
                White{" "}
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("Gold")}
              >
                Gold{" "}
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("Silver")}
              >
                Silver{" "}
              </Text>
              <Text
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => handleClick4("Green")}
              >
                Green{" "}
              </Text>
            </VStack>
            <hr />
            <br />

            <VStack mb="20px" alignItems="flex-start" color="gray.500">
              <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="17px">
                FRAME COLOR
              </Text>
              <Box
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => setGender("Men")}
              >
                Men
              </Box>

              <Box
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => setGender("Women")}
              >
                Women
              </Box>

              <Box
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => setGender("Kid")}
              >
                Kid
              </Box>
            </VStack>
            <VStack mb="20px" alignItems="flex-start" color="gray.500">
              <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="17px">
                GLASSES
              </Text>
              <Box
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => setTypes("eyeglasses")}
              >
                Eye Glasses
              </Box>

              <Box
                fontSize="17px"
                _hover={{ bg: "gray.200" }}
                w="100%"
                p="1"
                onClick={() => setTypes("sunglasses")}
              >
                Sun Glasses
              </Box>
            </VStack>
            <hr />
          </Box>

          <Box
            overflow="scroll"
            w="82%"
            borderLeft="1px solid"
            borderColor="gray.300"
            m={0}
            sx={{
              "::-webkit-scrollbar": {
                display: "none"
              }
            }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="7px"
              bg="#e2e8f0"
              borderColor="#ededed"
            >
              <Text fontSize="15px" color="gray.600" fontWeight="500">
                EYEGLASSES & SUNGLASSES
              </Text>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr="5px" color="green" fontSize="15px">
                  VIEW FRAMES
                </Text>
                <Switch colorScheme="green" isChecked size="lg" />
                <Text ml="5px" fontSize="15px">
                  VIEW 3D TRY ON
                </Text>
              </Flex>
              <Flex>
                <Flex alignItems="center">
                  <TbArrowsUpDown color="green" fontWeight="bold" />
                  <Text fontWeight="bold" color="green" fontSize="15px">
                    SortBy
                  </Text>
                </Flex>
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  border="0.1px"
                  borderRadius="3px"
                  borderColor="black"
                  ml="4px"
                  p="0px"
                  fontSize="16px"
                  bg="whiteAlpha.900"
                >
                  <option value="">Select</option>
                  <option value="lowtohigh">Price : low to high</option>
                  <option value="hightolow">Price : high to low</option>
                </Select>
              </Flex>
            </Flex>
            {products.length !== 0 && (
              <Text mt="5px" textAlign="center" fontSize="15px">
                Showing {products.length} of 50 Results
              </Text>
            )}

            {isLoding && (
              <Grid
                m="20px 10px"
                templateColumns="repeat(3, 1fr)"
                height="100vh"
                gap={6}
              >
                {loader.map((ele) => (
                  <Loading key={ele} />
                ))}
              </Grid>
            )}
            {products.length === 0 && (
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bolder",
                  textAlign: "center",
                  borderRadius: "10px",
                  color: "gray"
                }}
              >
                No Glasses Found
              </h2>
            )}
            <Grid
              m="20px 10px"
              templateColumns="repeat(3, 1fr)"
              height="100vh"
              gap={6}
            >
              {products.map((ele) => (
                <GridItem>
                  <Link to={`/newproducts/${ele._id}`}>
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
                        />
                        <br />
                        <br />
                        <br />

                        <Box p="10px">
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                          >
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
          </Box>
        </Flex>
        <Pagination current={page} onChange={(value) => setPage(value)} />
      </Box>
      <Footer />
    </>
  );
};

export default NewProduct;
