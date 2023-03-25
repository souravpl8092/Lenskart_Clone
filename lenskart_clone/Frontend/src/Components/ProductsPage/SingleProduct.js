import React from "react";
import styled from "styled-components";
import { FaStar, FaHeart } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import { TbCurrencyRupee } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../../ContextApi/CartContext";
import { useNavigate } from "react-router-dom";

// let size = { S: "Small", M: "Medium", L: "Large" };
const SingleProduct = ({ newData }) => {
  const { setCurrentProduct } = useContext(CartContext);
  const changeColor = (e) => {
    let presentColor = e.target.style.color;
    presentColor = presentColor === "red" ? "#ededed" : "red";
    e.target.style.color = presentColor;
  };
  const navigate = useNavigate();
  return (
    <Wrapper
      onClick={() => {
        navigate("/product/singleProduct");
      }}
    >
      <div
        className="product_container"
        onClick={() => {
          console.log(newData);
          setCurrentProduct(newData);
        }}
      >
        <FaHeart
          className="icon heart"
          onClick={(e) => {
            e.stopPropagation();
            changeColor(e);
          }}
        />
        <div className="img_container">
          <img
            src={newData.img}
            // src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20378388/2022/10/12/52f4ec74-e473-4b68-ac6a-91b9c1e6c8151665597326578Frames1.jpg"
            // src={newData.img_responsive}
            alt={newData.name}
          />
        </div>
        <div className="product_details">
          <div className="product_details_box rating">
            <span>
              <div
                className="star"
                onClick={(e) => console.log("onClick on star called")}
              >
                <FaStar />
              </div>
              {newData.ratingV || 4.5}
              <span className="rating_count">{newData.ratingC || 10}</span>
            </span>
          </div>
          <div className="product_details_box title">
            <span>{newData.name || "Vincent Chase Polarized"}</span>
          </div>
          <div className="product_details_box size_color">
            <div className="size">
              <span className="size_head">Size:</span>
              <span className="size_details">
                {/* {size[newData["product_size"]]} */}
                {newData.size}
                <GiPlainCircle className="disc" /> Wired Up
              </span>
            </div>
            <div className="color"></div>
          </div>
          <div className="product_details_box price">
            <span className="price_text">
              <TbCurrencyRupee className="rupee" />
              {newData.dprice || 1299}
            </span>
            <span className="prev_price">
              <TbCurrencyRupee />
              <del>{newData.OgPrice || 3000}</del>
            </span>
            <span className="tax">(+tax)</span>
          </div>
        </div>
        <div className="offer_box">
          <span>{newData.offer}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .heart {
    color: #ededed;
    font-size: 3rem;
    position: relative;
    top: 1.5rem;
    left: 88%;
    transition: 0.7s ease-in-out;
  }
  .heart:hover {
    transition: 0.7s ease-in-out;
    transform: scale(1.1);
    color: grey;
  }
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
  .rating_count {
    color: #7a7a9d;
    font-size: 1.6rem;
    padding: 1rem;
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
