import React from "react";

const Rating1 = () => {
  return (
    <div className="star-rating">
      {[...Array(1)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
};

export default Rating1;
