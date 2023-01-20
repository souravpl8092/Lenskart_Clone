import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomeCard1 = ({ type }) => {
  return (
    <Box cursor="pointer" p="-1">
      <Box>
        <Slide>
          {type.map((i) => (
            <Box key={i}>
              <Image src={`${i.img}`} alt={i.caption} w="100%" />
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};

export default HomeCard1;
