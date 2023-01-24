import React from "react";
import { useContext } from "react";
import {
  Center,
  Heading,
  HStack,
  InputGroup,
  InputLeftAddon,
  ModalHeader,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import Required from "./Required";
import { useEffect } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";

const Signup = () => {
  const init = {
    first_name: "",
    last_name: "",
    ph_no: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(init);
  const [first, setFirst] = useState();
  const [ph, setPh] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState(false);
  // const [register,setRegister]=useState(false);
  // const { isAuth,setisAuth ,register,setRegister }=useContext(AuthContext);
  const [Auth, setAuth] = useState();
  const [exist, setExist] = useState(false);
  var flag = false;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    switch (name) {
      case "first_name":
        setFirst(value === "" ? <Required info="This is required" /> : "");

        break;

      case "ph_no":
        setPh(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Please enter a valid mobile number (eg. 9987XXXXXX)" />
          )
        );

        break;

      case "email":
        setMail(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Please enter a valid email address e.g. johndoe@domain.com." />
          )
        );

        break;

      case "password":
        setPass(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Password should be more than 6 characters." />
          )
        );

        break;

      default:
        break;
    }
  };
  useEffect(() => {}, []);

  const getData = (body) => {
    setLoading(true);
    fetch(`https://easy-pink-bull-shoe.cyclic.app/Users`)
      .then((res) => res.json())
      .then((res) => {
        res.map((el) => {
          if (el.email === body.email) {
            flag = true;
            return el;
          }
        });
      })
      .then(() => {
        if (flag === false) {
          fetch(`https://easy-pink-bull-shoe.cyclic.app/Users`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              setAuth(true);
              console.log(Auth);
            })
            .catch((err) => setAuth(false))
            .finally(() => setLoading(false))
            .finally(() => onClose());
        } else {
          setLoading(false);
          setExist(true);
        }
      });
  };
  const handleRegister = () => {
    getData(userData);
  };
  return (
    <div>
      <Center onClick={onOpen} fontWeight={"400"} fontSize="14px" w="60px">
        Sign Up
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalHeader></ModalHeader>
        <ModalContent w={"430px"}>
          <ModalCloseButton />
          <ModalBody p={"0px 0px "}>
            <Box m={"5px 45px 20px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="20px"
                color={"#333368"}
              >
                Create an Account
              </Heading>
              <Input
                fontSize="16px"
                onChange={handleChange}
                type="text"
                name="first_name"
                placeholder="First Name*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {first}

              <Input
                fontSize="16px"
                onChange={handleChange}
                name="last_name"
                placeholder="Last Name"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              <InputGroup w="100%" h="50px" fontSize="18px" borderRadius="xl">
                <InputLeftAddon children="+91" h="45px" fontSize="18px" />
                <Input
                  onChange={handleChange}
                  type="number"
                  name="ph_no"
                  placeholder=" Mobile*"
                  w="100%"
                  h="45px"
                  fontSize="16px"
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                />
              </InputGroup>

              {userData.ph_no.length == 10 ? "" : ph}
              <Input
                onChange={handleChange}
                fontSize="16px"
                name="email"
                placeholder="Email*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {userData.email.includes("@gmail.") ? "" : mail}
              <Input
                onChange={handleChange}
                fontSize="16px"
                type={"password"}
                name="password"
                placeholder="Password*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {userData.password.length >= 6 ? "" : pass}
              <HStack>
                <Box
                  textDecoration={"underline"}
                  fontFamily={" sans-serif"}
                  color={"#333368"}
                  fontSize="14px"
                >
                  Got a Referral code?
                </Box>
                <Box fontFamily={" sans-serif"} color={"#333368"}>
                  (Optional)
                </Box>
              </HStack>
              <HStack>
                <Checkbox
                  mb={"20px"}
                  mt="20px"
                  size="lg"
                  fontFamily={" sans-serif"}
                >
                  Get Update on whatsapp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack>
              {exist === true ? <Required info="EmailId already exists" /> : ""}
              <HStack spacing={"3px"} mb="10px">
                <Box
                  fontSize={"14px"}
                  fontFamily={" sans-serif"}
                  fontWeight="100"
                  letterSpacing={"-0.4px"}
                >
                  By creating this account, you agree to our
                </Box>
                <Box fontSize={"15px"} textDecoration="underline">
                  Privacy Policy
                </Box>
              </HStack>

              {userData.email.includes("@gmail.") &&
              userData.password.length >= 6 &&
              userData.ph_no.length == 10 ? (
                <Button
                  isLoading={loading}
                  onClick={handleRegister}
                  bgColor={"#11daac"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#11daac" }}
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                  fontSize="18px"
                >
                  Create an Account
                </Button>
              ) : (
                <Button
                  bgColor={"#cccccc"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#cccccc" }}
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                  fontSize="18px"
                >
                  Create an Account
                </Button>
              )}
              <Center mt={"14px"} fontSize="15px">
                Have an account?{" "}
                <Center fontWeight={"500"} textDecoration="underline">
                  Sign In
                </Center>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
