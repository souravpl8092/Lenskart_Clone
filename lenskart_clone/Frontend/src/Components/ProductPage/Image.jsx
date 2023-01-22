import React from "react";
import styled from "styled-components";

const Image = ({ data }) => {
  const { bgc, link } = data;
  // style={{ backgroundColor: `#${bgc}` }}
  return (
    <Wrapper>
      <img src={link} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 2px solid #ededed;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 1rem 1rem; */
  img {
    cursor: pointer;
    /* height: 100%; */
    width: 90%;
    transition: 1s ease-in-out;
    margin: 3rem 1rem;
    border-radius: 1rem;
  }
  img:hover {
    transform: scale(1.11);
    transition: 1s ease-in-out;
  }
`;
export default Image;
