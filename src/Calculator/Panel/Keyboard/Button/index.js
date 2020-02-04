import React, { useEffect } from 'react';

const registerKeyPressedHandler = (key) => {
  window.addEventListener('keyup', (event) => {
    if (String.fromCharCode(event.keyCode) === key) {
      event.preventDefault();
      console.log(key);
    }
  });
};

const Button = props => {
  
  useEffect(() => {
    registerKeyPressedHandler(props.data.character);
  });

  return (
    <button
      onClick={props.data.method}
      className={props.data.classes}
      dangerouslySetInnerHTML={{ __html: props.data.character }}
    ></button>
  );
};

export default Button;
