import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const T1 = styled.h1`
  color: red;
  font-style: oblique;
`;

const T2 = styled.h1`
  color: red;
  font-style: oblique;
`;

const T3 = styled.h2``;

const T4 = styled.h2``;

const T5 = styled.h2``;


const Titles = () => {
  return (
    <Title>
      <div>
        <T1>Our</T1>
        <T2>Prices</T2>
      </div>
      <T3>Premier</T3>
      <T4>Premier Plus</T4>
      <T5>Catamaran</T5>
    </Title>
  );
};

export default Titles;
