import React, { Component } from "react";
import History from "./History";
import Panel from "./Panel";
import "./index.css";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calc-main">
        <div  className="calc-wrapper">
          <Panel />
          <History />
        </div>
      </div>
    );
  }
}
