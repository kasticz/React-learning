import React from "react";
function Input(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />

      </React.Fragment>
  );
}

export default Input;
