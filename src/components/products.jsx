import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px;
  border-color: darkgray;
  border-radius: 5px;
`;

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Container>
          <p>{product.status}</p>
          <p style={{ textDecoration: "line-through" }}>{product.price}</p>
          <p>{product.priceWithDiscount}</p>
        </Container>
      ))}
    </div>
  );
};

export default Products;
