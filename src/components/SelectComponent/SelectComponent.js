import React from "react";
import errors from "../../constants/errorsConstants";
import StyledSelectComponent from "./StyledSelectComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const SelectComponent = ({ name, error, label, options, value, ...rest }) => {
  return (
    <StyledSelectComponent>
      {label && <label className="label-select">{label}</label>}
      <div className="select-wrapper">
        <select name={name} value={value} {...rest}>
          <option value="" />
          {(options || []).map((optionSelect, index) => (
            <option key={index} value={optionSelect}>
              {optionSelect}
            </option>
          ))}
        </select>
        {error && (
          <ErrorComponent
            message={
              name === "units" ? errors.required : errors.noProjectSelected
            }
          />
        )}
      </div>
    </StyledSelectComponent>
  );
};
export default SelectComponent;
