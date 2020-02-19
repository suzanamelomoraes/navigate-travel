import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px;
  border-color: darkgray;
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
  margin-top: 5px;
`;

const P1 = styled.p`
  color: red;
  font-size: 20px;
`;

const P2 = styled.p`
  text-decoration: line-through;
`;

const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
`;

const Products = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => (
        <div key={Math.floor((Math.random() * 10000) + 1)}>
        <Container>
          <P1>{product.priceWithDiscount}</P1>
          <P2>{product.price}</P2>
          <p>{product.status}</p>
        </Container>
        </div>
      ))}
    </Wrapper>
  );
};

export default Products;
