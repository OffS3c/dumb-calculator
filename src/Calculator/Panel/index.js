import React from "react";
import Keyboard from './Keyboard';
import './index.css';
// import Display from "./Display";
// import Keyboard from "./Keyboard";

const panel = () => {
  return (
    <div>
      <div className="c-calculator js-calculator">
        <div className="c-calculator__header">
          <div className="c-calculator__value js-calculator__value">0</div>
        </div>
        <Keyboard/>
        
      </div>
    </div>
  );
};

export default panel;
