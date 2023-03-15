import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ages from "./filters/age-groups";
import Agegroups from "./filters/Agegroups";

let age_filters, agebox;
const ProductFilter = ({ priceFilter }) => {
  const { size } = useSelector((state) => state.productReducer);
  console.log(size);
  useEffect(() => {
    age_filters = document.querySelector(".age_filters");
  }, []);

  return (
    <Wrapper>
      <div className="filter_Box frame_shape">
        <span className="filter_title">frame shape</span>
        <div className="filters"></div>
        {size.length > 0 &&
          size.map((s, ind) => <button key={ind}>{s}</button>)}
      </div>
      <div className="filter_Box frame_color">
        <span className="filter_title">frame color</span>
        <div className="filters"></div>
      </div>
      <div className="filter_Box price">
        <span className="filter_title">price</span>
        <div className="filters">
          <button onClick={() => priceFilter(1000)}>setabove</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 20%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* !box styles   */
  .filter_Box {
    border: 1px solid #ededed;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #9d9d9d;
    /* height: 50px; */
    transform-origin: top;
    transition: all 0.7s ease-in-out;
  }
  .filter_title {
    text-transform: uppercase;
    font-size: 2rem;
    /* background-color: #ededed; */
    color: #5a5a5a;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }
  .age_filters {
    border: 1px solid black;
    display: block;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 1s ease-in-out;
  }
  .age .filters {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform-origin: top;
    transition: all 0.3s ease-in-out;
  }
  .expand {
    transition: all 0.3s ease-in-out;
    /* display: block; */
    transform: scale(1);
  }
  .age {
    transform: translateY(0.1);
  }
  @media (max-width: 1100px) {
    display: none;
  }
  @media (max-width: 720px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
export default ProductFilter;
