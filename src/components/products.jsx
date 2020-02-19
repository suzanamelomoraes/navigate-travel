import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px;
  border-color: darkgray;
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
  margin-top: 5px;
  height: 150px;
`;

const P1 = styled.p`
  color: red;
  font-family: "Anton", sans-serif, Arial, Helvetica, sans-serif;
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
        <div key={Math.floor(Math.random() * 10000 + 1)}>
          <Container>
            {product.priceWithDiscount ? (
              <div>
                {" "}
                <P2>{product.price}</P2> <P1>{product.priceWithDiscount}</P1>{" "}
              </div>
            ) : (
              <P1>{product.price}</P1>
            )}
            {product.status === "Last Spaces" ? (
              <p style={{ color: "#F46A00" }}>{product.status}</p>
            ) : product.status === "Sold Out" ? (
              <p style={{ color: "#F21C00" }}>{product.status}</p>
            ) : (
              <p>{product.status}</p>
            )}
          </Container>
        </div>
      ))}
    </Wrapper>
  );
};

export default Products;
