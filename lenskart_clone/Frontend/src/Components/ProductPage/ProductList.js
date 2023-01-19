import React, { useState } from "react";
import SingleProduct from "./components/SingleProduct";
import styled from "styled-components";

function ProductList() {
  const products = new Array(10).fill(Date.now());
  return (
    <Wrapper>
      <div className="product_list">
        {products.map((elem) => (
          <SingleProduct key={elem} />
        ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .product_list {
    width: 80%;
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 100px;
  }
  @media (max-width: 720px) {
    .product_list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 480px) {
    .product_list {
      grid-template-columns: repeat(1, 1fr);
      padding: 20px 10px;
      width: 100%;
    }
  }
`;
export default ProductList;
