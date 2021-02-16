import React from "react";
import StyledSelectComponent from "./StyledSelectComponent";

const SelectComponent = ({
  label,
  className,
  options,
  name,
  onSelect,
  selectedOption,
  error,
}) => {
  return (
    <StyledSelectComponent>
      {label && <label className="label-select">{label}</label>}
      <div className="select-wrapper">
        <select
          name={name}
          onChange={onSelect}
          className={className}
          value={selectedOption}
        >
          <option value="" />
          {(options || []).map((optionSelect, index) => (
            <option key={index} value={optionSelect}>
              {optionSelect}
            </option>
          ))}
        </select>
        {error && <span className="error-message">Required</span>}
      </div>
    </StyledSelectComponent>
  );
};
export default SelectComponent;
