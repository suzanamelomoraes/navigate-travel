import React from "react";
import styled from "styled-components"
import Products from "./products";

const Container = styled.div`
display: flex;
flex-flow: row nowrap;
text-align: center;
padding: 20px;
`;

const P = styled.p`
background: red;
border-radius: 20px;
color: white;
`;


const Dates = ({ dates }) => {
  return (
    <Container>
      {dates.map(date => (
        <div>
          <h5>{date.date}</h5>
          <h6>{date.dateText}</h6>
          <h6>({date.dateDay})</h6>
          <P>{date.temperature}</P>
          <div>
          <Products products={date.products} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Dates;
