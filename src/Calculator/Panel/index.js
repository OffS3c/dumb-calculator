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

  

  const calculate = data => {

    const displayPanelNew = {
      isCalculated: false,
      result: "0",
      expression: "",
      displayedExpression: ""
    };

    if (displayPanel.isCalculated) {
      return displayPanelNew;
    }

    // separate operations from data
    switch (data.value) {
      case 'AC':
        return displayPanelNew;
      case '=':
        if (displayPanel.isCalculated) {
          return displayPanel;
        }

        displayPanelNew.isCalculated = true;
        displayPanelNew.result = displayPanel.result;
        props.onCalculation(displayPanel);
        
       
        displayPanelNew.displayedExpression = '=';
        return displayPanelNew;
    
      default:
        break;
    }

    // append to displayedExpression (character)
    displayPanelNew.displayedExpression = displayPanel.displayedExpression.concat(
      data.character
    );

    // append to expression (value)
    displayPanelNew.expression = displayPanel.expression.concat(data.value);

    // calculate actual result
    try {
      // eslint-disable-next-line no-eval
      displayPanelNew.result = eval(displayPanelNew.expression).toString();
    } catch (error) {
      // Logger.info(error);
    }

    // return the displaypanel object
    return displayPanelNew;
  };

  const buttonClickHandler = data => {
    setdisplayPanel({
      ...calculate(data)
    });
  };

  return (
    <div className="c-calculator-wrapper">
      <Display panel={displayPanel} />
      <Keyboard
        clicked={(event, data) => {
          buttonClickHandler(data);
        }}
      />
    </div>
  );
};

export default Panel;
