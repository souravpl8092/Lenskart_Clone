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
        size="sm"
        bg="whiteAlpha.900"
        w="50"
        justifyContent="center"
        m="20px auto"
        onClick={onOpen}
      >
        Sign In
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
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
          <ModalCloseButton />
          <ModalBody pb={7} pl={10} pr={10}>
            <Text fontSize="22px">Sign In</Text>
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
            <Center>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleSubmit}
                w="100%"
                m="auto"
                borderRadius="3xl"
              >
                Sign In
              </Button>
            </Center>
            <br />
            <Text fontSize="16px">
              New member?{" "}
              <Link textDecoration="underline">Create an Account</Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
