import React from "react";
import Button from "./Button";
import board from "./board";

const keyboard = () => {
  return (
    <div className="c-calculator-keyboard js-calculator">
      <div className="c-calculator__body js-calculator__body">
        {board.map((row, i) =>
          row.map((col, j) => <Button data={col} key={j} />)
        )}
      </div>
    </div>
  );
};

export default keyboard;
