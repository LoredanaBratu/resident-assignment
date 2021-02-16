import React from "react";
import StyledInputComponent from "./StyledInputComponent";

const InputComponent = ({
  label,
  size,
  value,
  handleChange,
  name,
  RightIcon,
  onRightIconClick,
  error,
  handleRemove = () => null,
  addProjectName = () => null,
}) => {
  return (
    <StyledInputComponent>
      {label && (
        <div className="input-label">
          <label>{label}</label>
        </div>
      )}
      <div className="input-wrapper">
        <input
          type="text"
          name={name}
          value={value}
          className={`input input--${size}`}
          onChange={handleChange}
          onKeyDown={addProjectName}
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        />
        {error && <span className="error-message">Required</span>}
      </div>
      {RightIcon && (
        <img
          src={RightIcon}
          alt="Clear input"
          onClick={() => onRightIconClick(value)}
          className="right-icon"
        />
      )}
    </StyledInputComponent>
  );
};
export default InputComponent;

// InputComponent.propTypes = {
//   size: PropTypes.oneOf(["small", "large"]),
// };
