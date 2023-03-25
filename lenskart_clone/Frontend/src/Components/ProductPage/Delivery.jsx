import React from "react";
import styled from "styled-components";

const Delivery = () => {
  return (
    <Wrapper>
      <span className="title">Check Delivery Options</span>
      <div>
        <input type="number" id="form_cotrol" placeholder="Enter Pin Code" />
        <button className="btn">Check</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem;
  border: 3px solid #ededed;

  div {
    border: 3px solid #ededed;
    border-radius: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  button {
    background-color: white;
    border: none;
    color: #00bac6;
    font-size: 1.7rem;
    cursor: pointer;
  }
  span.title {
    font-size: 2.6rem;
    color: #000000a4;
  }

  input {
    border: none;
    font-size: 1.7rem;
    width: 90%;
    height: 90%;
    padding: 1rem;
  }
  #form_control:focus,
  #form_control:active {
    border: none;
    background: transparent;
  }
`;
export default Delivery;
