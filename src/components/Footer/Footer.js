import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import StyledFooter from "./StyledFooter";

const Footer = ({ toggleJSON, showJSON, onSubmit, onCancel }) => {
  return (
    <StyledFooter>
      <div className="form-container">
        <ButtonComponent
          type="submit"
          value="Submit"
          className="json-btn"
          buttonText={showJSON ? "Show form" : "View form JSON"}
          onClick={toggleJSON}
        />
        <div className="actions-buttons">
          <ButtonComponent
            type="reset"
            value="Reset"
            buttonText="Cancel"
            className="action-btn"
            onClick={onCancel}
          />
          <ButtonComponent
            type="submit"
            value="Submit"
            buttonText="Save"
            className="action-btn"
            onClick={onSubmit}
          />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
