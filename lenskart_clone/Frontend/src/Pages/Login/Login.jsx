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

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
    };
    fetch("https://spotless-erin-trousers.cyclic.app/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        console.log(res);
      })
      .catch((err) => console.log(err));
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <br />
            <Center pl={5} pr={5} pt={2}>
              <Button
                colorScheme="teal"
                size="lg"
                w="100%"
                m="auto"
                fontSize="18px"
                p={9}
                borderRadius="50px"
                onClick={handleSubmit}
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
