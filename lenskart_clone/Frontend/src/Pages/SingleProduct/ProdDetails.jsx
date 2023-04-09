import {
  Button,
  Image,
  Input,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

const ProdDetails = ({ type }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="500">
              Technical Information
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Product Id
              </Box>
              <Box>{type.productId}</Box>
            </Flex>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Model No.
              </Box>
              <Box>LA E15301</Box>
            </Flex>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Frame Size
              </Box>
              <Box>Narrow</Box>
            </Flex>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Frame Width
              </Box>
              <Box>138 mm</Box>
            </Flex>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Frame Dimensions
              </Box>
              <Box>{type.dimension}</Box>
            </Flex>
            <Flex gap="4">
              <Box color="gray.400" fontWeight="500">
                Frame colour
              </Box>
              <Box>{type.colors}</Box>
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="500">
              Visit Nearby Store
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex gap="4" p="4">
            <Image
              src="https://static.lenskart.com/media/desktop/img/pdp/visit_store.png"
              alt="img"
            />
            <Box color="gray.500">
              <Text>Please Share Your Location To See Nearby Stores</Text>
              <Text color="#52aba3" fontWeight="600">
                Store Locator
              </Text>
            </Box>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="500">
              Check Delivery Options
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Input placeholder="Enter Pin Code" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="500">
              Review
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text textAlign="center" mb="4">
            No Reviews
          </Text>

          <Button m="auto" w="100%" bg="#00bac6" color="white">
            WRITE A REVIEW
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProdDetails;
