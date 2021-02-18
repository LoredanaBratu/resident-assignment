import React from "react";
import StyledButtonComponent from "./StyledButtonComponent";

const ButtonComponent = ({ buttonText, ...otherParams }) => {
  return (
    <StyledButtonComponent>
      <button {...otherParams}>{buttonText}</button>
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
