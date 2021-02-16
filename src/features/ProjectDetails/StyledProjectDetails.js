import styled from "styled-components";
import Colors from "../../constants/colorConstants";

const StyledProjectDetails = styled.div`
  padding: 15px 10px;
  margin: 10px 0px;
  border: 1px dashed ${Colors.gray};
  position: relative;

  .duration-container {
    display: flex;
    align-items: center;
  }
  .label-textarea {
    margin-right: 10px;
  }
  .details-textarea-section {
    display: flex;
    padding: 15px 0px;
  }
  .textarea-details-field {
    border-radius: 5px;
  }
  .duration-section {
    display: flex;
    margin: 0 auto;
  }
  .delete-section-icon {
    position: absolute;
    height: 20px;
    right: -10px;
    top: -10px;
  }
  .textarea-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .error-message {
    color: red;
    font-size: 12px;
  }
`;

export default StyledProjectDetails;
