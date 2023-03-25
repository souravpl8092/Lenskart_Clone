import React, { useContext } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Accordion,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="#fbf9f7"
      p={2.5}
    >
      <HStack m="auto">
        <Box w="20%">
          <Link to="/">
            <Image src="https://i.imgur.com/OHxtfjd.png" alt="logo" w="75%" />
          </Link>
        </Box>
        <Box w="70%">
          <Input
            placeholder="What are you looking for"
            border="1px solid black"
            w="90%"
            fontSize="16px"
            h="35px"
          />
        </Box>

        <Box>
          <Button colorScheme="blue" p="0" onMouseEnter={onOpen}>
            <Image
              w={6}
              src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
            />
          </Button>
          <Drawer
            size="sm"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="blackAlpha.900">
              <DrawerCloseButton />
              <DrawerHeader bg="whiteAlpha.900">
                {isAuth ? (
                  <div
                    style={{
                      borderBottom: "2px solid #18CFA8",
                      padding: "5%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%"
                      }}
                    >
                      <Avatar
                        src="https://bit.ly/broken-link"
                        size="lg"
                        mr="2"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start"
                        }}
                      >
                        <h1
                          style={{
                            marginTop: "10px",
                            fontSize: "20px",
                            color: "blackAlpha.900"
                          }}
                        >
                          {Authdata[0].first_name}
                        </h1>
                        <p color="#CCCCCC" mt="5%" fontSize="12px">
                          Enjoy Buy 1 Get 1 offer for 365 days
                        </p>
                      </div>
                    </div>
                    <Button
                      w="100%"
                      h="35px"
                      mt="5%"
                      colorScheme="blue"
                      fontSize="18px"
                      _hover={{ bg: "blue.400" }}
                    >
                      GET GOLD MEMBERSHIP
                    </Button>
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "5%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginBottom: "-6%"
                      }}
                    >
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Login />
                      </Box>
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Signup />
                      </Box>
                    </div>
                  </div>
                )}
              </DrawerHeader>
              <DrawerBody borderBottomWidth="1px" bg="whiteAlpha.900">
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="19px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      onClick={() => navigate("/orderhistory")}
                    >
                      My Orders
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="19px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Manage Notification
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      fontSize="19px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%" color="black" fontSize="18px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Box borderBottom="0.1px solid gray" p="5% 0%">
                    <Menu>
                      <MenuButton
                        bg="whiteAlpha.900"
                        color="black"
                        textAlign="left"
                        _hover={{ fontWeight: "bold" }}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        w="100%"
                        fontSize="19px"
                        fontWeight="400"
                      >
                        Men
                      </MenuButton>
                      <Link to="/newproducts">
                        <MenuList>
                          <MenuItem>EYEGLASSES</MenuItem>
                          <MenuItem>COMPUTER GLASSES</MenuItem>
                          <MenuItem>CONTACT LENSES</MenuItem>
                          <MenuItem>SUN GLASSES</MenuItem>
                        </MenuList>
                      </Link>
                    </Menu>
                  </Box>

                  <Box
                    borderBottom="0.1px solid gray"
                    p="5% 0%"
                    color="black"
                    _hover={{ fontWeight: "bold" }}
                  >
                    <Menu>
                      <MenuButton
                        bg="whiteAlpha.900"
                        color="black"
                        textAlign="left"
                        _hover={{ fontWeight: "bold" }}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        w="100%"
                        fontSize="19px"
                        fontWeight="400"
                      >
                        Women
                      </MenuButton>
                      <Link to="/newproducts">
                        <MenuList>
                          <MenuItem>EYEGLASSES</MenuItem>
                          <MenuItem>COMPUTER GLASSES</MenuItem>
                          <MenuItem>CONTACT LENSES</MenuItem>
                          <MenuItem>SUN GLASSES</MenuItem>
                        </MenuList>
                      </Link>
                    </Menu>
                  </Box>

                  <Box
                    borderBottom="0.1px solid gray"
                    p="5% 0%"
                    color="black"
                    _hover={{ fontWeight: "bold" }}
                  >
                    <Menu>
                      <MenuButton
                        bg="whiteAlpha.900"
                        color="black"
                        textAlign="left"
                        _hover={{ fontWeight: "bold" }}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        w="100%"
                        fontSize="19px"
                        fontWeight="400"
                      >
                        Kids
                      </MenuButton>
                      <Link to="/newproducts">
                        <MenuList>
                          <MenuItem>EYEGLASSES</MenuItem>
                          <MenuItem>COMPUTER GLASSES</MenuItem>
                          <MenuItem>CONTACT LENSES</MenuItem>
                        </MenuList>
                      </Link>
                    </Menu>
                  </Box>
                </Box>
                <Heading mt="15%" color="black" fontSize="19px" mb="5%">
                  Our Services
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      fontSize="19px"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Free Home Trail
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Home Eye check-up
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Store Locator
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" mb="5%" fontSize="19px">
                  HIGHLIGHTS
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Check Frame Size
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Gold Membership
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Try Frames in 3D
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Dowloads Apps
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" fontSize="19px" mb="5%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Frequently Asked Questions
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Cancellation & Return Policy
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="19px"
                    >
                      Cobrowsing
                    </Box>
                  </Link>
                </Box>

                <Accordion allowMultiple></Accordion>
              </DrawerBody>
              {isAuth && (
                <DrawerFooter bg="whiteAlpha.900">
                  <Button
                    mt="5%"
                    fontSize="18px"
                    colorScheme="blue"
                    borderBottom="1px solid #526171"
                    p="6% 15%"
                    _hover={{ bg: "blue.200" }}
                    onClick={() => {
                      setisAuth(false);
                      return <Navigate to="/" />;
                    }}
                  >
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
}

export default Nav;
