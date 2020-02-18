import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px;
  border-color: darkgray;
  border-radius: 5px;
`;

const P1 = styled.p`
color: red;
font-size: 20px;
`;

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Container>
          <P1>{product.priceWithDiscount}</P1>
          <p style={{ textDecoration: "line-through" }}>{product.price}</p>
          <p>{product.status}</p>
        </Container>
      ))}
    </div>
  );
};

export default Products;
