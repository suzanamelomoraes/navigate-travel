import React from "react";
import styled from "styled-components";
import PremierSrc from "../images/premier.jpg";
import PremierPlusSrc from "../images/premierplus.jpg";
import CatamaranSrc from "../images/catamaran.jpg";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const T1 = styled.h1`
  color: red;
  font-style: oblique;
`;

const Boats = styled.img`
  width: 200px;
`;

const Titles = () => {
  return (
    <Title>
      <div>
        <T1>Our</T1>
        <T1>Prices</T1>
      </div>

      <Boats src={PremierSrc} />
      <Boats src={PremierPlusSrc} />
      <Boats src={CatamaranSrc} />
    </Title>
  );
};

export default Titles;
