import React from "react";
import styled from "styled-components";
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
        <div key={Math.floor((Math.random() * 10000) + 1)}>
          <h4>{date.dateText}</h4>
          <h5>({date.dateDay})</h5>
          <P>{date.temperature}</P>

          <Products products={date.products} />
        </div>
      ))}
    </Container>
  );
};

export default Dates;
