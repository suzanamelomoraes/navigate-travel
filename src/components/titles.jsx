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

const Titles = () => {
  return (
    <Title>
      <div>
        <T1>Our</T1>
        <T2>Prices</T2>
      </div>
      <h2>Premier</h2>
      <h2>Premier Plus</h2>
      <h2>Catamaran</h2>
    </Title>
  );
};

export default Titles;
