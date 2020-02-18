import React from "react";
import Products from "./products";




const Dates = ({ dates }) => {
  return (
    <div className="container">
      {dates.map(date => (
        <div>
          <h5>{date.date}</h5>
          <h6>{date.dateText}</h6>
          <h6>{date.dateDay}</h6>
          <p>{date.temperature}</p>
          <div>
          <Products products={date.products} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dates;
