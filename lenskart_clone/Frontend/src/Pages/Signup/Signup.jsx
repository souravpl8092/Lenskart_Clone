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
} from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const initvalue = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initvalue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const { firstName, lastName, mobile, email, password } = formState;
  const handleSubmit = (e) => {
    if (
      firstName != "" &&
      lastName != "" &&
      mobile != "" &&
      email != "" &&
      password != ""
    ) {
      axios({
        method: "POST",
        url: "http://localhost:8080/products",
        data: formState,
      }).then((res) => {
        setFormState(initvalue);
      });
    }
  };

  return (
    <>
      <Button
        my={4}
        size="sm"
        bg="whiteAlpha.900"
        w="50"
        justifyContent="center"
        m="20px auto"
        onClick={onOpen}
      >
        Sign Up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Create an Account</Center>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={7} pl={10} pr={10}>
            <FormControl>
              <Input
                name="firstName"
                value={firstName}
                type="text"
                variant="outline"
                placeholder="First Name"
                size="md"
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <Input
                name="lastName"
                value={lastName}
                type="text"
                variant="outline"
                placeholder="Last Name"
                size="md"
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <InputGroup size="md">
                <InputLeftAddon children="+91" />
                <Input
                  name="mobile"
                  value={mobile}
                  type="Number"
                  variant="outline"
                  placeholder="Mobile"
                  size="md"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <br />
            <FormControl>
              <Input
                name="email"
                value={email}
                type="email"
                variant="outline"
                placeholder="Email"
                size="md"
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <FormControl>
              <Input
                data-cy="add-product-title"
                name="password"
                value={password}
                type="text"
                variant="outline"
                placeholder="Password"
                size="md"
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <Link fontSize="12px" fontWeight="500" textDecoration="underline">
              Got a Referral Code?(Optional)
            </Link>
            <br />
            <br />
            <Text fontSize="14px">
              By creating this account, you agree to our{" "}
              <Link textDecoration="underline">Privacy Policy</Link>
            </Text>
            <br />
            <Center>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleSubmit}
                w="100%"
                m="auto"
                borderRadius="3xl"
              >
                Create an Account
              </Button>
            </Center>
            <br />
            <Center>
              <Text fontSize="14px">
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
