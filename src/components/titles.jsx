import React from "react"
import styled from "styled-components"

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Titles = () => {
return(
    <Title>
    <h1>Our Prices</h1>
    <h2>Premier</h2>
    <h2>Premier Plus</h2>
    <h2>Catamaran</h2>
  </Title>
)
}

export default Titles;