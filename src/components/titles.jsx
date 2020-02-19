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
  font-family: "Anton", sans-serif;
  font-size: 2.5em;
  margin: 0;
`;

const Boats = styled.img`
  width: 200px;
  border-radius: 5px;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BoatName = styled.h2`
  position: absolute;
  bottom: -15px;
  left: 5px;
`;

const Titles = () => {
  return (
    <Title>
      <div>
        <T1>Our</T1>
        <T1>Prices</T1>
      </div>
      <Container>
        <Boats src={PremierSrc} />
        <BoatName>Premier</BoatName>
      </Container>

      <Container>
        <Boats src={PremierPlusSrc} />
        <BoatName>Premier Plus</BoatName>
      </Container>

      <Container>
        <Boats src={CatamaranSrc} />
        <BoatName>Catamaran</BoatName>
      </Container>
    </Title>
  );
};

export default Titles;
