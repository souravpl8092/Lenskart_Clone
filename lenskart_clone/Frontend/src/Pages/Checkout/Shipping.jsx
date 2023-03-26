import React, { useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./pay.css";

function Shipping() {
  const navigate = useNavigate();

  const init = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    country: "India",
    state: ""
  };

  const [userData, setUserData] = useState(init);
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [ph, setPh] = useState();
  const [mail, setMail] = useState();
  const [add, setAdd] = useState();
  const [pin, setPin] = useState();
  const [cities, setCities] = useState();
  const [countries, setCountries] = useState();
  const [statess, setStatess] = useState();

  const Required = (props) => {
    return (
      <Box
        fontSize={"14px"}
        m="3px 0px 3px 0px"
        color={"#ff1f1f"}
        fontWeight="500"
        letterSpacing={"-0.4px"}
      >
        {props.info}
      </Box>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    switch (name) {
      case "first_name":
        setFirst(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "last_name":
        setLast(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "phone":
        setPh(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="Please enter a valid mobile number (eg. 9987XXXXXX)" />
          )
        );
        break;

      case "email":
        setMail(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="Please enter a valid email address e.g. johndoe@domain.com." />
          )
        );
        break;

      case "address":
        setAdd(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "pincode":
        setPin(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="Pincode should be 6 digit (eg. 110001)" />
          )
        );
        break;

      case "city":
        setCities(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "country":
        setCountries(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "state":
        setStatess(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <Flex m="auto" justifyContent="space-evenly">
        <Box id="addres" w="65%">
          <Text
            id="ships"
            bg="teal.400"
            p="2"
            fontWeight="bold"
            color="whiteAlpha.900"
            fontSize="22px"
          >
            Shipping Address
          </Text>

          <Box border="1px solid black" p="4" borderRadius="xl" mt="7">
            <Flex w="100%">
              <Box w="50%">
                <input
                  type="text"
                  name="first_name"
                  fontSize="16px"
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="input"
                />
                <Box pl="6" mt="-4">
                  {first}
                </Box>
              </Box>

              <Box w="50%">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name*"
                  className="input"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {last}
                </Box>
              </Box>
            </Flex>

            <Box id="radio" style={{ fontSize: "15px" }}>
              <label>Gender</label>
              <input type="radio" id="Male" name="Male" value="Male" />
              <label for="Male">Male</label>
              <input type="radio" id="Female" name="Male" value="Female" />
              <label for="Female">Female</label>
            </Box>

            <Flex w="100%">
              <Box w="50%">
                <input
                  className="input"
                  type="number"
                  name="phone"
                  placeholder="Phone Number*"
                  borderRadius="20px"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {userData.phone.length === 10 ? "" : ph}
                </Box>
              </Box>

              <Box w="50%">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {userData.email.includes("@") &&
                  userData.email.includes(".com")
                    ? ""
                    : mail}
                </Box>
              </Box>
            </Flex>
            <br />

            <Flex w="100%">
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  name="address"
                  placeholder="Address Line 1*"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {add}
                </Box>
              </Box>
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  placeholder="Address Line 2"
                  fontSize="16px"
                />
                <br />
              </Box>
            </Flex>

            <Flex w="100%">
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  name="pincode"
                  placeholder="Zip/Postal Code*"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {userData.pincode.length === 6 ? "" : pin}
                </Box>
              </Box>
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  placeholder="City/District*"
                  name="city"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {cities}
                </Box>
              </Box>
            </Flex>

            <br />

            <Flex w="100%">
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  placeholder="Country*"
                  name="country"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {countries}
                </Box>
              </Box>
              <Box w="50%">
                <input
                  className="input"
                  type="text"
                  placeholder="State*"
                  name="state"
                  fontSize="16px"
                  onChange={handleChange}
                />
                <Box pl="6" mt="-4">
                  {statess}
                </Box>
              </Box>
            </Flex>
            <br />

            {userData.first_name.length >= 1 &&
            userData.last_name.length >= 1 &&
            userData.phone.length === 10 &&
            userData.email.includes("@") &&
            userData.email.includes(".com") &&
            userData.address.length >= 1 &&
            userData.pincode.length === 6 &&
            userData.city.length >= 1 &&
            userData.country.length >= 1 &&
            userData.state.length >= 1 ? (
              <button id="shiping" onClick={() => navigate("/orders")}>
                CONTINUE
              </button>
            ) : (
              <button id="shiping-disable">CONTINUE</button>
            )}
          </Box>
          <br />
        </Box>

        <CartItem />
      </Flex>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Shipping;
