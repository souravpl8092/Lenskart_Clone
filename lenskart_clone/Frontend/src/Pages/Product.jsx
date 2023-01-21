import React from "react";
import styled from "styled-components";
import ProductDesc from "../components/ProductPage/ProductDesc";
import ProductImage from "../components/ProductPage/ProductImage";

const Product = () => {
  return (
    <Wrapper>
      <span className="product_path">
        Eyewear {"\u00A0"} / {"\u00A0"}Eyeglasses {"\u00A0"}/ {"\u00A0"} Brands
        {"\u00A0"}/ {"\u00A0"} Lenskart Air / Peyush Bansal Shark Tank Amber
        Full Rim Hustlr Eyeglasses - 206824
      </span>
      <div className="product_container">
        <ProductImage />
        <ProductDesc />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 3rem;
  div.product_container {
    width: 100%;
    /* border: 2px solid blue; */
    display: grid;
    grid-template-columns: 60% 35%;
    gap: 3rem;
    grid-template-rows: 100vh;
  }
  span.product_path {
    color: grey;
    font-size: 1.6rem;
    padding: 1rem 3rem;
    margin-bottom: 2rem;
  }
`;

export default Product;
