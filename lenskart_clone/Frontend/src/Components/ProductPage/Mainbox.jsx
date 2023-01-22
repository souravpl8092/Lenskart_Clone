import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../ContextApi/CartContext";
import Button from "./Button";

const Mainbox = () => {
  let { currentProduct } = useContext(CartContext);
  const buttons = [
    {
      color: "FFFFFF",
      backgroundColor: "00BAC6",
      text: "buy now",
      hoverColor: "61b7ae",
      id: Date.now(),
    },
    {
      color: "00BAC6",
      backgroundColor: "FFFFFF",
      text: "add power",
      hoverColor: "FFFFFF",
      id: Date.now() + 1,
    },
  ];
  return (
    <Wrapper>
      <span className="desc_box title1">Vincent Chase Polarized</span>
      <span className="desc_box title2">
        {currentProduct?.name  ||
          "Black Half Rim Round Vincent Chase SLEEK STEEL"}
      </span>
      <span className="desc_box size">
        Size: {currentProduct?.size || "medium"}
      </span>
      <span className="desc_box price">₹{currentProduct?.dprice || 1299}</span>
      <div className="desc_box colors">
        <span className="color red"></span>
        <span className="color black"></span>
        <span className="color blue"></span>
      </div>
      <div className="desc_box buttons">
        {buttons.map((data) => (
          <Button data={data} key={data.id} />
        ))}
      </div>
      <div className="desc_box"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid red; */
  /* height: 50rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 2px solid #ededed;
  border-radius: 1rem;
  .title1 {
    color: #999999;
    font-size: 1.6rem;
  }
  .title2 {
    font-size: 2.3rem;
    font-weight: 700;
    word-spacing: 0.3rem;
  }
  .size {
    color: #999999;
    font-size: 2.3rem;
  }
  .price {
    color: #329c92;
    font-size: 2.6rem;
  }
  .desc_box {
    /* border: 1px solid black; */
  }
  .colors {
    display: flex;
    gap: 1rem;
  }
  .color {
    /* border: 1px solid black; */
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  .color:hover {
    transform: scale(1.3);
    transition: 0.3s ease-in-out;
  }
  .red {
    background-color: red;
  }
  .black {
    background-color: black;
  }
  .blue {
    background-color: blue;
  }
  .btn1 {
    color: white;
    background-color: #00bac6;
  }
`;
export default Mainbox;
