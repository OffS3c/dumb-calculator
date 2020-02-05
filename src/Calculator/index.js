import React, { useState } from "react";
import History from "./History";
import Panel from "./Panel";
import "./index.css";

const Calculator = props => {
  const [displayHistory, setDisplayHistory] = useState([]);

  const getDisplayHistory = (childState) => {
      displayHistory.push({
          isCalculated: true,
          result: childState.result,
          expression: childState.expression,
          displayedExpression: childState.displayedExpression,
        });
        setDisplayHistory([...displayHistory]);
  };

  return (
    <div className="calc-main">
      <div className="calc-wrapper">
        <Panel onCalculation={getDisplayHistory}/>
        <History data={displayHistory} />
      </div>
    </div>
  );
};

export default Calculator;
