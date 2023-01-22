import React from "react";
import styled from "styled-components";

const InfoBox = ({ data, field }) => {
  console.log(data, field);
  return (
    <Wrapper>
      <div style={{ color: `${field === "heading" ? "grey" : "black"}` }}>
        {data.map((data, ind) => (
          <span key={Date.now()}>{data[field]}</span>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }
`;
export default InfoBox;
