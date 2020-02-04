import React from "react";
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

        <div className="c-calculator__body js-calculator__body">
          <button
            className="c-calculator__button c-calculator__button--function js-calculator__clearall"
            data-type="function"
            data-action="clearAll"
          >
            <abbr title="All Clear">AC</abbr>
          </button>

          <button
            className="c-calculator__button c-calculator__button--function js-calculator__clear"
            data-type="function"
            data-action="clear"
            hidden
          >
            <abbr title="Clear">C</abbr>
          </button>

          <button
            className="c-calculator__button c-calculator__button--function"
            data-type="function"
            data-action="invert"
          >
            &plusmn;
          </button>

          <button
            className="c-calculator__button c-calculator__button--function"
            data-type="function"
            data-action="percentage"
          >
            %
          </button>

          <button
            className="c-calculator__button c-calculator__button--operator"
            data-type="operator"
            data-action="divide"
          >
            &divide;
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="7"
          >
            7
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="8"
          >
            8
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="9"
          >
            9
          </button>

          <button
            className="c-calculator__button c-calculator__button--operator"
            data-type="operator"
            data-action="multiply"
          >
            &times;
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="4"
          >
            4
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="5"
          >
            5
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="6"
          >
            6
          </button>

          <button
            className="c-calculator__button c-calculator__button--operator"
            data-type="operator"
            data-action="subtract"
          >
            &minus;
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="1"
          >
            1
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="2"
          >
            2
          </button>

          <button
            className="c-calculator__button"
            data-type="value"
            data-value="3"
          >
            3
          </button>

          <button
            className="c-calculator__button c-calculator__button--operator"
            data-type="operator"
            data-action="add"
          >
            +
          </button>

          <button
            className="c-calculator__button c-calculator__button--double"
            data-type="value"
            data-value="0"
          >
            0
          </button>

          <button
            className="c-calculator__button"
            data-type="function"
            data-action="decimal"
          >
            .
          </button>

          <button
            className="c-calculator__button c-calculator__button--operator"
            data-type="function"
            data-action="calculate"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default panel;
