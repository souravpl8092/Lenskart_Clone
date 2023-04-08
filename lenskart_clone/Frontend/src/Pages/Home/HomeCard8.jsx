import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const HomeCard8 = ({ type }) => {
  return (
    <Box w="100%" bg="#000042">
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)"
        }}
        w={{ lg: "92%", md: "90%", sm: "90%", base: "87%" }}
        m="auto"
        color="whiteAlpha.900"
        gap="9"
      >
        {type.map((i) => (
          <Box>
            <Accordion allowMultiple borderColor="#000042">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton borderBottom="1px solid white">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize="20px"
                          ml={{ lg: "-4%", sm: "0%", base: "0%" }}
                        >
                          {i.head}
                        </Box>
                        {isExpanded ? (
                          <Box
                            border="2px solid white"
                            borderRadius="100px"
                            p="2px 8px"
                          >
                            <MinusIcon fontSize="12px" fontWeight="700" />
                          </Box>
                        ) : (
                          <Box
                            border="2px solid white"
                            borderRadius="100px"
                            p="2px 8px"
                          >
                            <AddIcon fontSize="12px" fontWeight="700" />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      border="1px solid white"
                      borderRadius="md"
                      borderTopColor="#000042"
                    >
                      {i.info}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        ))}
      </Grid>
      <br />
    </Box>
  );
};

export default HomeCard8;
