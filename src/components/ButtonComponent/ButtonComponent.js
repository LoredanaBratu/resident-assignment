import React from "react";
import StyledButtonComponent from "./StyledButtonComponent";

const ButtonComponent = ({ buttonText, ...rest }) => {
  return (
    <StyledButtonComponent>
      <button {...rest}>{buttonText}</button>
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
