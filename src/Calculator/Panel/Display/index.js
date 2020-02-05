import React from "react";

const display = props => {
  return (
    <div className="c-calculator__display">
      <div className="c-calculator__value js-calculator__value c-calculator-overflow-handler">
        {props.panel.displayedExpression}
      </div>
      <div className="c-calculator__value js-calculator__value calculator__result">
        {props.panel.result}
      </div>
    </div>
  );
};

export default display;
