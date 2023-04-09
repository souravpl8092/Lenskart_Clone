import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Image,
  Heading,
  Box,
  Button,
  Flex,
  Text,
  Grid,
  Menu,
  MenuButton,
  MenuList
} from "@chakra-ui/react";
import "../../App.css";

function NavbarCard5() {
  return (
    <Flex bg="#fbf9f7" cursor="pointer" gap="6">
      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          EYEGLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Link to="/products">
            <Box>
              <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
                <Flex direction="column" justifyContent="space-evenly" mt="20">
                  <Flex gap="5" fontSize="15px">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                      alt="men"
                      size="md"
                    />
                    <Box
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex gap="5">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                      alt="women"
                      size="md"
                    />
                    <Box
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Women
                    </Box>
                  </Flex>

                  <Flex gap="5">
                    <Avatar
                      name="Kent Dodds"
                      src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                      alt="kid"
                      size="md"
                    />
                    <Box
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Kids
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    SELECT CATEGORY
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                    CLASSIC EYE-GLASSES
                    <p>
                      Starting From ₹ <span>1199</span>
                    </p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                    PREMIUM EYE-GLASSES
                    <p>
                      Starting From ₹ <span>3000</span>
                    </p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }} p="2">
                    COMPUTER EYE-GLASSES
                    <p>
                      Starting From ₹ <span>1299</span>
                    </p>
                  </Box>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Our Top Picks
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Lenskart BLU lenses
                    </Box>
                    <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Tinted Eyeglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Computer Eyeglasses
                    </Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Progressive Eyeglasses
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Frame Type
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Rectangle Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Wayfarer Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Round Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Aviator Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cat-Eye Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rimless Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Half Rim Frames</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Geometric Frames </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brands
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Lenskart Air</Box>
                    <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
                    <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                    <Box _hover={{ fontWeight: "bold" }}>New Balance</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Carrera</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Fossil</Box>
                  </Flex>
                </Flex>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          COMPUTER GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Link to="/products">
            <Box>
              <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
                <Flex
                  direction="column"
                  gap="4"
                  justifyContent="space-evenly"
                  mt="20"
                >
                  <Flex gap="5">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                      alt="men"
                      size="md"
                    />
                    <Box
                      _hover={{ textDecoration: "underline" }}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex gap="5">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                      alt="women"
                      size="md"
                    />
                    <Box
                      _hover={{ textDecoration: "underline" }}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Women
                    </Box>
                  </Flex>

                  <Flex gap="5">
                    <Avatar
                      name="Kent Dodds"
                      src="https://static.lenskart.com/media/desktop/img/kid_pic.png"
                      alt="kid"
                      size="md"
                    />
                    <Box
                      _hover={{ textDecoration: "underline" }}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Kids
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    SELECT CATEGORY
                  </Box>

                  <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                    Blu 0 Computer Glasses
                    <p>
                      Starting From ₹ <span>1299</span>
                    </p>
                  </Box>
                  <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                    PREMIUM RANGE
                    <p>
                      Starting From ₹ <span>3000</span>
                    </p>
                  </Box>
                </Flex>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          KIDS GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="100%"
          bg="whiteAlpha.800"
          w="100%"
          p="2"
        >
          <Link to="/products">
            <Box>
              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                justifyContent="center"
                p="5"
              >
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg1"
                    src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                    alt="kidsIcon_1"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Eye Glasses
                  </Box>
                </Box>
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                    alt="kidsIcon_2"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Zero Power Computer Glasses
                  </Box>
                </Box>
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                    alt="kidsIcon_3"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Sun Glasses
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          CONTACT LENSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          p="5"
          w="100%"
        >
          <Link to="/newproduct">
            <Box>
              <Grid gridTemplateColumns="repeat(5, 1fr)" p="1" w="100%">
                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brands
                  </Box>
                  <Flex direction="column" gap="2" fontSize="md">
                    <Box _hover={{ fontWeight: "bold" }}> Aqualens</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Bausch Lomb</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Johnson & Johnson</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Soflens</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Acuvue</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Alcon</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Air Optix</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Pure Vision</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Disposability
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}> Monthly</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Day & Night</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Daily</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Yearly</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Bi-weekly</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Power
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Spherical - CYL</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Spherical + CYL</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cylindrical Power</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Toric Power</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Colors
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Green</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Blue</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Brown</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Turquoise</Box>
                    <Box _hover={{ fontWeight: "bold" }}>View all colors</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Solution
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Small</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Large</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      View all solutions
                    </Box>
                  </Flex>
                </Flex>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          SUN GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Link to="/products">
            <Box>
              <Grid gridTemplateColumns="repeat(6, 1fr)">
                <Flex direction="column" justifyContent="space-evenly">
                  <Flex gap="5">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://static.lenskart.com/media/desktop/img/men_pic.png"
                      alt="men"
                      size="md"
                    />
                    <Box
                      _hover={{ textDecoration: "underline" }}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex gap="5" mt="-40%">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://static.lenskart.com/media/desktop/img/women_pic.png"
                      alt="women"
                      size="md"
                    />
                    <Box
                      _hover={{ textDecoration: "underline" }}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Women
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    SELECT CATEGORY
                  </Box>
                  <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                    CLASSIC SUNGLASSES
                    <p>
                      Starting From ₹ <span>1299</span>
                    </p>
                  </Box>
                  <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md" p="2">
                    PREMIUM SUNGLASSES
                    <p>
                      Starting From ₹ <span>2500</span>
                    </p>
                  </Box>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Our Top Picks
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Pilot Style</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Polarized Sunglasses
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Shape
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Aviator</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rounders</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Wayfarer</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rectangle</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Hexagon</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cat-Eye</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Clubmaster</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Colections
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Glam Slam</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Havana</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Polarized</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      Designer Sunglasses
                    </Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brand
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
                    <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
                    <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                  </Flex>
                </Flex>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          HOME EYE-TEST
        </MenuButton>

        <MenuList color="blackAlpha.900" h="400px" bg="whiteAlpha.800" w="100%">
          <Box>
            <Grid gridTemplateColumns="repeat(2, 1fr)">
              <Box>
                <Image
                  h="100%"
                  w="100%"
                  src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                  alt="doc_img"
                />
              </Box>
              <Box>
                <Box m="auto">
                  <Heading
                    color="black"
                    fontWeight=""
                    fontSize="4xl"
                    fontFamily="sans-serif"
                    textAlign="center"
                    mt="10%"
                  >
                    Get your eyes checked at home
                  </Heading>
                  <Text
                    color="black"
                    fontSize="lg"
                    fontWeight="600"
                    textAlign="center"
                    mt="2%"
                  >
                    A certified refractionist will wisit you with
                  </Text>
                  <Text
                    color="black"
                    fontSize="lg"
                    fontWeight="600"
                    textAlign="center"
                    mt="2%"
                  >
                    latest eye testing machines & 100 trail frames
                  </Text>
                  <Button
                    colorScheme="black"
                    variant="outline"
                    bg="whiteAlpha.900"
                    rounded="50px"
                    p="7"
                    fontSize="15px"
                    mt="20"
                    ml="30%"
                    _hover={{ bg: "#020043", color: "white" }}
                  >
                    Book appointment
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          STORE LOCATOR
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Grid gridTemplateColumns="repeat(2, 1fr)">
            <Box>
              <Heading
                color="black"
                fontWeight=""
                fontSize="40px"
                fontFamily="sans-serif"
                textAlign="center"
                mt="15%"
              >
                Over 1100+ Lenskart Store
              </Heading>
              <Box color="black" fontSize="15px" textAlign="center" mt="6%">
                Experience eyewear in a whole new way: Visit your nearest store
              </Box>
              <Box color="black" fontSize="15px" textAlign="center" mt="1.5%">
                and treat yourself to 5000+ eyewear styles.
              </Box>
              <Button
                colorScheme="black"
                variant="outline"
                bg="whiteAlpha.900"
                rounded="50px"
                p="6"
                fontSize="15px"
                mt="10"
                ml="30%"
                _hover={{ bg: "#020043", color: "white" }}
              >
                Locate a store
              </Button>
            </Box>
            <Flex mt="30%" fontSize="14px" fontWeight="600">
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Delhi1.png"
                  alt="Delhi"
                ></Image>
                <Text mt="-8px" ml="22px">
                  Delhi
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Banglore1.png"
                  alt="Banglore"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Banglore
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Mumbai1.png"
                  alt="Mumbai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Mumbai
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png"
                  alt="Ahemdabad"
                ></Image>
                <Text mt="-8px" ml="10px">
                  Ahmedabad
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Chennai1.png"
                  alt="Chennai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Chennai
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png"
                  alt="Hyderabad"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Hyderabad
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Cities1.png"
                  alt="+100_cities"
                ></Image>
                <Text mt="-8px" ml="15px">
                  +100 cities
                </Text>
              </Box>
            </Flex>
          </Grid>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default NavbarCard5;
