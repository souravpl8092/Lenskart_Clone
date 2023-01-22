import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  ModalOverlay,
  Link,
  Text,
  Center,
  useToast,
} from "@chakra-ui/react";

const Signup = () => {
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = (e) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      mobile !== "" &&
      email !== "" &&
      password !== ""
    ) {
      const payload = {
        firstName,
        lastName,
        mobile,
        email,
        password,
      };
      fetch("https://spotless-erin-trousers.cyclic.app/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) =>
          toast({
            title: "Error",
            description: "Please fill all mandatory field.",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          })
        );
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill all mandatory field.",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        my={4}
        size="lg"
        bg="whiteAlpha.900"
        justifyContent="center"
        m="20px auto"
        onClick={onOpen}
        fontSize="14px"
        fontWeight="400"
      >
        Sign Up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        p={4}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center fontSize="25px" mt={4}>
              Create an Account
            </Center>
          </ModalHeader>
          <ModalCloseButton fontSize="15px" p={9} />

          <ModalBody>
            <FormControl pl={9} pr={9}>
              <Input
                name="firstName"
                value={firstName}
                type="text"
                variant="outline"
                placeholder="First Name"
                w="100%"
                h="45px"
                fontSize="16px"
                borderRadius="xl"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl pl={9} pr={9}>
              <Input
                name="lastName"
                value={lastName}
                type="text"
                variant="outline"
                placeholder="Last Name"
                w="100%"
                h="45px"
                fontSize="16px"
                borderRadius="xl"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl pl={9} pr={9}>
              <InputGroup w="100%" h="50px" fontSize="18px" borderRadius="xl">
                <InputLeftAddon children="+91" h="45px" fontSize="18px" />
                <Input
                  name="mobile"
                  value={mobile}
                  type="Number"
                  variant="outline"
                  placeholder="Mobile"
                  w="100%"
                  h="45px"
                  fontSize="16px"
                  borderRadius="xl"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <br />
            <FormControl pl={9} pr={9}>
              <Input
                name="email"
                value={email}
                type="email"
                variant="outline"
                placeholder="Email"
                w="100%"
                h="45px"
                fontSize="16px"
                borderRadius="xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl pl={9} pr={9}>
              <Input
                data-cy="add-product-title"
                name="password"
                value={password}
                type="text"
                variant="outline"
                placeholder="Password"
                w="100%"
                h="45px"
                fontSize="16px"
                borderRadius="xl"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <br />
            <Link
              fontSize="12px"
              fontWeight="500"
              textDecoration="underline"
              pl={9}
              pr={9}
            >
              Got a Referral Code?(Optional)
            </Link>
            <br />
            <br />
            <br />
            <Text fontSize="14px" pl={9} pr={9}>
              By creating this account, you agree to our{" "}
              <Link textDecoration="underline">Privacy Policy</Link>
            </Text>
            <br />
            <Center>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleSubmit}
                fontSize="16px"
                p={9}
                w="90%"
                m="auto"
                borderRadius="50px"
              >
                Create an Account
              </Button>
            </Center>
            <Center>
              <Text fontSize="14px" pb={7} pt={4}>
                Have an account ? <Link>Sign In</Link>
              </Text>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Signup;
