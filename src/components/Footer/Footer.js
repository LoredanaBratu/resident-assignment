import React from "react";
import StyledFooter from "./StyledFooter";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Footer = ({
  showJSON = false,
  onSubmit = () => null,
  onCancel = () => null,
  toggleJSON = () => null,
}) => {
  return (
    <StyledFooter>
      <div className="form-container">
        <ButtonComponent
          type="submit"
          value="Submit"
          className="json-btn"
          onClick={toggleJSON}
          buttonText={showJSON ? "Show form" : "View form JSON"}
        />
        <div className="actions-buttons">
          <ButtonComponent
            type="reset"
            value="Reset"
            onClick={onCancel}
            buttonText="Cancel"
            className="action-btn reset"
          />
          <ButtonComponent
            type="submit"
            value="Submit"
            buttonText="Save"
            onClick={onSubmit}
            className="action-btn submit"
          />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
