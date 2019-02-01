import React from "react";
import "./Button.css";

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
    <button className="Button" onClick={handleClick}>
      + {increment}
    </button>
  );
};

export default Button;
