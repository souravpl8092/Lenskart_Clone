import React from "react";
import styled from "styled-components";
import Delivery from "./Delivery";
import Mainbox from "./Mainbox";
import TechnicalInfo from "./TechnicalInfo";

const ProductDesc = () => {
  return (
    <Wrapper>
      <Mainbox />
      <TechnicalInfo />
      <Delivery />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid red; */
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export default ProductDesc;
