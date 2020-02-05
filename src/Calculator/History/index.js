import React from "react";

const History = props => {
  return (
    <div className="c-calculator-history" style={{ overflowY: "scroll" }}>
        {props.data.reverse().map((el, i) => {
          return <div>{`${props.data.length-i}. ${el.displayedExpression}=${el.result}`}</div>;
        })}
    </div>
  );
};

export default History;
