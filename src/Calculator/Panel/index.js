import React, { useState } from "react";
import Keyboard from "./Keyboard";
import "./index.css";
import Display from "./Display";

const Panel = props => {
  const [displayPanel, setdisplayPanel] = useState({
    isCalculated: false,
    result: "0", // string/0
    expression: "", // string
    displayedExpression: "" // string
  });

  const [displayHistory, setdisplayHistory] = useState([]);

  return (
    <div className="c-calculator-wrapper">
      <Display panel={displayPanel} />
      <Keyboard />
    </div>
  );
};

export default Panel;
