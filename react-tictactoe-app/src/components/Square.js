import React from "react";
import "./Square.css";

const Square = ({ onClick, value }) => {
  return (
    <button
      tabIndex="-1"
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};
export default Square;
