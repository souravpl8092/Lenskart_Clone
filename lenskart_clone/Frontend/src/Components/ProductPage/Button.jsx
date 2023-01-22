import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../ContextApi/CartContext";
const Button = ({ data }) => {
  let { currentProduct, setCart, cart } = useContext(CartContext);

  const addToCart = () => {
    setCart([...cart, currentProduct]);
  };
  return (
    <CustomButton onClick={() => addToCart}>
      <div
        className="btn btn1"
        style={{
          color: `#${data.color}`,
          backgroundColor: `#${data.backgroundColor}`,
        }}
      >
        <span className="title">{data.text}</span>
        {/* <span>(with 1 year warranty)</span> */}
      </div>
    </CustomButton>
  );
};
const CustomButton = styled.div`
  div.btn {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem 0rem;
    border-radius: 1rem;
    /* justify-content: center;
    align-items: center; */
    /* border: 1px solid red; */
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    text-transform: uppercase;
  }
`;
export default Button;
