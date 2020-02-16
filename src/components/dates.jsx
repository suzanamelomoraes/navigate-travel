import React from "react";
import Producs from "./products";

const Dates = ({ dates }) => {
  return (
    <div>
      {dates.map(date => (
        <div>
          <h5>{date.date}</h5>
          <h6>{date.dateText}</h6>
          <h6>{date.dateDay}</h6>
          <p>{date.temperature}</p>
          <Producs products={date.products} />
        </div>
      ))}
    </div>
  );
};

export default Dates;
