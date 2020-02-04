import React from "react";
// import '../../index.css';

const button = props => {
  return <button className={props.data.classes} dangerouslySetInnerHTML={{__html: props.data.character}}></button>;
};

export default button;
