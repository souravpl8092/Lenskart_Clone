// import SingleProduct from "./SingleProduct.js";
import { useState } from "react";
import styled from "styled-components";
import newData from "../../assets/newData";
import NewSingleProduct from "./SingleProduct";
const Productlist = () => {
  const [data, setData] = useState(newData);
  // setData(newData);
  return (
    <Wrapper className="wrapper">
      <div className="product_list_header">
        <span className="header_box category">All {"Computer"} Glasses</span>
        <span className="header_box "></span>
        <span className="header_box "></span>
      </div>
      <div className="product_list">
        {data.map((elem, ind) => (
          // <SingleProduct key={elem.id} productInfo={elem} />
          <NewSingleProduct key={ind} newData={elem} />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80%;
  padding: 0rem 5rem;

  //!Product List Header Styles
  .product_list_header {
    background-color: #ededed;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
  }

  .category {
    text-transform: uppercase;
    font-size: 2rem;
    color: grey;
  }
  //!Product List Styled
  .product_list {
    width: 100%;
    border: 1px solid #ededed;
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 2rem;
  }
  @media (max-width: 1100px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
    padding: 0rem 1rem;
    .category {
      font-size: 1.5rem;
    }
    .product_list {
      grid-template-columns: repeat(1, 1fr);
      padding: 20px 10px;
      width: 100%;
    }
  }
`;
export default Productlist;
