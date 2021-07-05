import React from "react";
import Square from "../Square/Square";
import "./Board.css";

function Board({ squares, onClick }) {
  return (
    <div className="Board">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
}

export default Board;
