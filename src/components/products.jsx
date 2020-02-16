import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div>
          <div>
            <p>{product.class}</p>
            <div style={{ border: "solid 1px red" }}>
              <p>{product.status}</p>
              <p style={{ textDecoration: "line-through" }}>{product.price}</p>
              <p>{product.priceWithDiscount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
