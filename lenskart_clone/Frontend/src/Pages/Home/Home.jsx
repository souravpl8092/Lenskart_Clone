import React from "react";
import HomeCard from "./HomeCard";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import { HomeCard4, HomeCard4a } from "./HomeCard4";
import HomeCard5 from "./HomeCard5";
import { HomeDetails, HomeDetails1, HomeDetails2 } from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <Box>
      <HomeCard type={HomeDetails} />
      <HomeCard1 type={HomeDetails1} />
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt="img"
        mt="10"
      />
      <HomeCard2
        type={HomeDetails2}
        //linked={"/personalcare"}
        src="https://i.imgur.com/Gry0Q5D.png"
      />
      <HomeCard4
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="As Seen On Kiara"
        src="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="Aquacolor - Glam Up With Color Lenses"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
      <br />
      <br />
      <br />
      <HomeCard5 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4a
        text="INTRODUCING OJOS Wear - SUBSCRIBE & SAVE"
        src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
      />
    </Box>
  );
};

export default Home;
