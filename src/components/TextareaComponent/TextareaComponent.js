import React from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import StyledTextareaComponent from "./StyledTextareaComponent";

const TextareaComponent = ({ label, error, ...otherParams }) => {
  return (
    <StyledTextareaComponent>
      <div className="details-textarea-section">
        {label && <span className="label-textarea">Details</span>}

        <div className="textarea-wrapper">
          <textarea
            rows="3"
            name="details"
            id="details-area"
            {...otherParams}
          />
          {error && <ErrorComponent />}
        </div>
      </div>
    </StyledTextareaComponent>
  );
};
export default TextareaComponent;
