import React from "react";

const Rating3 = () => {
  return (
    <div className="star-rating">
      {[...Array(3)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
};

export default Rating3;
