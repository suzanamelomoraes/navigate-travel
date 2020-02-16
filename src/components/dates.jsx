import React from "react";

const Dates = ({ dates }) => {
  return (
    <div>
      {dates.map(date => (
        <div>
          <h5>{date.date}</h5>
          <h6>{date.dateText}</h6>
          <h6>{date.dateDay}</h6>
          <p>{date.temperature}</p>
        </div>
      ))}
    </div>
  );
};

export default Dates;
