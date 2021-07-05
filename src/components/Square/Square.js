import React from "react";
import "./Square.css";

function Square({ onClick, value }) {
  return (
    <button className="btn" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
