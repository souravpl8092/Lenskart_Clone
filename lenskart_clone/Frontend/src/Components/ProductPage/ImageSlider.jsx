import React from "react";
import styled from "styled-components";
import newData from "../../assets/newData.js";

const ImageSlider = ({ data }) => {
  return (
    <Wrapper>
      <img className="product_img" src={newData[0].img} alt={newData[0].name} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: none;
  .product_img {
    width: 100%;
  }
  padding: 2rem 1rem;
  border: 2px solid #ededed;
  border-radius: 1rem;
  @media (max-width: 480px) {
    display: block;
  }
  @media (max-width: 780px) {
    display: block;
  }
`;
export default ImageSlider;
