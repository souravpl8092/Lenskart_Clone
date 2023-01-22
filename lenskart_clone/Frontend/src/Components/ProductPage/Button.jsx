// import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../ContextApi/CartContext";
const Button = ({ data, currentProduct }) => {
  let { setCart, cart } = useContext(CartContext);

  const navigate = useNavigate();

  const addToCart = () => {
    const { name, img, ratingV, ratingC, size, dprice, OgPrice } =
      currentProduct;

    const payload = {
      product_base: "",
      img_responsive: img,
      product_brand: "",
      product_name: name,
      product_size: size,
      product_ratingsContainer: ratingV,
      product_ratingsCount: ratingC,
      product_separator: "",
      product_discountedPrice: dprice,
      product_strike: OgPrice,
      product_discountPercentage: "",
    };
    console.log(currentProduct);
    fetch("https://spotless-erin-trousers.cyclic.app/post/cart", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setCart([...cart, currentProduct]);
  };
  return (
    <CustomButton
      onClick={() => {
        addToCart();
        navigate("/cartpage");
      }}
    >
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
