import React from "react";

const Rating2 = () => {
  return (
    <div className="star-rating">
      {[...Array(2)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
};

export default Rating2;
