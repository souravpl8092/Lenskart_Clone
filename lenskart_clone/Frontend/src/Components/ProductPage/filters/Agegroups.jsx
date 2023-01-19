import React from "react";
import styled from "styled-components";

const Agegroups = ({ age }) => {
  return (
    <Wrapper>
      <input type="checkbox" id={age} />
      <label htmlFor={age}>{age}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  input:hover,
  label:hover {
    cursor: pointer;
  }
  :hover {
    color: black;
  }
`;
export default Agegroups;
