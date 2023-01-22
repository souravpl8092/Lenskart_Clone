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
`;
export default ProductImage;
