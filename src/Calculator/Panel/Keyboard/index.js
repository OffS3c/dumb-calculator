import React from "react";
import Button from "./Button";
import Board from "./board";
// import '../index.css';

const keyboard = () => {
  return (
    <div className="c-calculator__body js-calculator__body">
      {Board.map((row, i) =>
        row.map((col, j) => <Button data={col} key={j} />)
      )}
    </div>
  );
};

export default keyboard;
