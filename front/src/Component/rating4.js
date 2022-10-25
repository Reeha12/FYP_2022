import React from "react";

const Rating4 = () => {
  return (
    <div className="star-rating">
      {[...Array(4)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
};

export default Rating4;
