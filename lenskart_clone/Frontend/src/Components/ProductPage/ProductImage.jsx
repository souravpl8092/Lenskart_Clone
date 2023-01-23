import React from "react";
import styled from "styled-components";
import Images from "./Images";

const ProductImage = () => {
  return (
    <Wrapper>
      <Images />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid red; */
  /* display: block; */
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
export default ProductImage;
