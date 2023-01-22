import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  ModalOverlay,
  Link,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const initvalue = {
    email: "",
  };

  const [formState, setFormState] = useState(initvalue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const { email } = formState;
  const handleSubmit = (e) => {
    if (email != "") {
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
        size="lg"
        bg="whiteAlpha.900"
        w="50"
        justifyContent="center"
        m="20px auto"
        onClick={onOpen}
        fontSize="14px"
        fontWeight="400"
      >
        Sign In
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w="100%" p="0" borderRadius="20px">
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="signinimg"
              borderRadius="20px 20px 0px 0px"
            />
          </ModalHeader>
          <ModalCloseButton fontSize="15px" p={9} />
          <br />
          <ModalBody pb={7} pl={10} pr={10}>
            <Text fontSize="25px" pl={5}>
              Sign In
            </Text>
            <br />
            <FormControl pl={5} pr={5}>
              <Input
                name="email"
                value={email}
                type="email"
                variant="outline"
                placeholder="Email"
                w="100%"
                h="45px"
                fontSize="16px"
                borderRadius="2xl"
                onChange={handleChange}
              />
            </FormControl>
            <br />
            <Center pl={5} pr={5} pt={2}>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleSubmit}
                w="100%"
                m="auto"
                fontSize="18px"
                p={9}
                borderRadius="50px"
              >
                Sign In
              </Button>
            </Center>
            <br />
            <Text fontSize="16px" pl={5} pr={5}>
              New member?{" "}
              <Link textDecoration="underline">Create an Account</Link>
            </Text>
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
