import React from "react";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import data from "./TecnicalInfo";

const TechnicalInfo = () => {
  return (
    <Wrapper>
      <span className="title">Technincal Information</span>
      <div className="info_container">
        <InfoBox data={data} field={"heading"} />
        <InfoBox data={data} field={"value"} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 2rem;
  border: 2px solid #ededed;
  border-radius: 1rem;
  
  span.title {
    font-size: 2.6rem;
    color: #000000a4;
  }
  div.info_container {
    padding: 0px 2rem;
  }

  div {
    display: flex;
    gap: 0.2rem 2rem;
    /* border: 1px solid red; */
  }
`;
export default TechnicalInfo;
