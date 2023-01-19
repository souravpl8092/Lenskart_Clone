import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import { TbCurrencyRupee } from "react-icons/tb";

const SingleProduct = () => {
  return (
    <Wrapper>
      <div className="product_container">
        <div className="img_container">
          <img
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-blue-sky-full-rim-hustlr-eyeglasses_g_708823_02_202230_dec22.jpg"
            alt=""
          />
        </div>
        <div className="product_details">
          <div className="product_details_box rating">
            <span>
              <FaStar className="star" />
              4.5
            </span>
          </div>
          <div className="product_details_box title">
            <span>Vincent Chase Polarized</span>
          </div>
          <div className="product_details_box size_color">
            <div className="size">
              <span className="size_head">Size:</span>
              <span className="size_details">
                Medium <GiPlainCircle className="disc" /> Wired Up
              </span>
            </div>
            <div className="color"></div>
          </div>
          <div className="product_details_box price">
            <span className="price_text">
              <TbCurrencyRupee className="rupee" />
              1299
            </span>
            <span className="prev_price">
              <TbCurrencyRupee />
              <del>3000</del>
            </span>
            <span className="tax">(+tax)</span>
          </div>
        </div>
        <div className="offer_box">
          <span>40% OFF. Use:TANK40</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product_container {
    /* height: 400px; */
    border: 3px solid #ededed;
    /* border: 3px solid black; */
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: ease-in-out 0.2s;
  }
  .product_container:hover {
    transition: ease-in-out 0.2s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
  .img_container {
    display: flex;
    /* border: 1px solid black; */
    padding: 20px 20px;
  }
  .img_container > img {
    margin: auto;
    width: 80%;
  }
  .product_details_box {
    padding: 0.2rem 2rem;
    /* border: 1px solid red; */
    /* height: 10px; */
  }
  .star {
    color: #00b5a5;
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  .rating > span {
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: #eeeef5;
    border-radius: 2rem;
  }
  .title > span {
    color: #161652;
    font-size: 2.6rem;
    font-weight: 700;
  }
  .disc {
    font-size: 0.4rem;
  }
  .size {
    display: flex;
    gap: 1rem;
  }
  .size span {
    font-size: 2rem;
  }
  .size_details {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .price {
    display: flex;
    gap: 1rem;
  }

  .price_text {
    font-size: 2.5rem;
    color: #4c4c7a;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .prev_price,
  .tax {
    color: #a1a1b9;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  .offer_box {
    display: flex;
    align-items: center;
    height: 2.5rem;
    border-bottom-left-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
    background: linear-gradient(90deg, #f7f1de 0%, rgba(247, 241, 222, 0) 100%);
    padding: 0.5rem 2rem;
    background-image: linear-gradient(
      90deg,
      rgb(247, 241, 222) 0%,
      rgba(247, 241, 222, 0) 100%
    );
  }
  .offer_box span {
    font-size: 2rem;
    color: #d1c08f;
    font-weight: 700;
  }

  //!Styles for Mobiles
  @media (max-width: 480px) {
    .product_container {
      width: 100%;
      border: 3px solid #ededed;
      margin: auto;
    }
    .rating > span {
      width: 5rem;
      font-size: 1.5rem;
      border-radius: 2rem;
    }
    .star {
      font-size: 1.5rem;
    }
    .title > span {
      font-size: 2rem;
      font-weight: 700;
    }
    //!size and Color box styles
    .disc {
      font-size: 0.4rem;
    }
    .size {
      display: flex;
      gap: 1rem;
    }
    .size span {
      font-size: 1.5rem;
    }
    .price {
      gap: 0.5rem;
    }
    .price_text {
      color: #000042;
      font-size: 2rem;
      margin: 0;
      padding: 0;
    }
    .prev_price,
    .tax {
      font-size: 1.5rem;
    }
    .offer_box {
      padding: 0.5rem 2rem;
    }
    .offer_box span {
      font-size: 1.5rem;
      color: #d1c08f;
      font-weight: 700;
    }
  }
`;

export default SingleProduct;
