import React from "react";
import errors from "../../constants/errorsConstants";
import StyledErrorComponent from "./StyledErrorComponent";

const ErrorComponent = ({ message = errors.required }) => {
  return (
    <StyledErrorComponent>
      <div className="error-message">{message}</div>
    </StyledErrorComponent>
  );
};
export default ErrorComponent;
