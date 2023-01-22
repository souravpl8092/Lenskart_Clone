import React from "react";
import styled from "styled-components";
import Image from "./Image";
import images from "./productImages";

const Images = () => {
  return (
    <Wrapper>
      <div className="image_container">
        {images.map((elem, ind) => (
          <Image data={elem} key={elem.id + ind} />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 1rem;
  div.image_container {
    display: grid;
    /* border: 1px solid teal; */
    grid-template-columns: 48% 48%;
    gap: 2%;
  }
`;
export default Images;
