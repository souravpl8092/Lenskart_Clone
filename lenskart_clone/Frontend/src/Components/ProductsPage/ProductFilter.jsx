import React from "react";
import styled from "styled-components";
import ages from "./filters/age-groups";
import Agegroups from "./filters/Agegroups";

const ProductFilter = ({ priceFilter }) => {
  return (
    <Wrapper>
      <div className="filter_Box age">
        <span className="filter_title">age group</span>
        <div className="filters">
          {ages.map((age) => (
            <Agegroups key={age} age={age} />
          ))}
        </div>
      </div>
      <div className="filter_Box frame_type">
        <span className="filter_title">frame type</span>
        <div className="filters"></div>
      </div>
      <div className="filter_Box frame_shape">
        <span className="filter_title">frame shape</span>
        <div className="filters"></div>
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
  /* border: 1px solid blue; */
  .filter_Box {
    border: 1px solid #ededed;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #9d9d9d;
  }
  .filter_title {
    text-transform: uppercase;
    font-size: 2rem;
    /* background-color: #ededed; */
    color: #5a5a5a;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }
  .age .filters {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
