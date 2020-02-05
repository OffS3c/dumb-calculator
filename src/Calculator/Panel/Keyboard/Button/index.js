import React from "react";

const Button = props => {
  return (
    <button
      onClick={props.clicked.bind(this, props.data)}
      className={props.data.classes}
      dangerouslySetInnerHTML={{ __html: props.data.character }}
    ></button>
  );
};

export default Button;
