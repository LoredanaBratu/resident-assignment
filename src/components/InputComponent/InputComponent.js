import React from "react";
import PropTypes from "prop-types";
import StyledInputComponent from "./StyledInputComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const InputComponent = ({
  size,
  value,
  error,
  label,
  RightIcon,
  className,
  type = "text",
  onRightIconClick = () => null,
  ...rest
}) => {
  return (
    <StyledInputComponent className={className}>
      {label && (
        <div className="input-label">
          <label>{label}</label>
        </div>
      )}
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          className={`input input--${size}`}
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
          {...rest}
        />
        {error && <ErrorComponent />}
      </div>
      {RightIcon && (
        <img
          src={RightIcon}
          alt="Clear input"
          className="right-icon"
          onClick={() => onRightIconClick(value)}
        />
      )}
    </StyledInputComponent>
  );
};
export default InputComponent;

InputComponent.propTypes = {
  size: PropTypes.oneOf(["extraSmall", "small", "large"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  label: PropTypes.string,
  RightIcon: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onRightIconClick: PropTypes.func,
};
