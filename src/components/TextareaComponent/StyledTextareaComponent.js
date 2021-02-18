import styled from "styled-components";

const StyledTextareaComponent = styled.div`
  textarea:focus {
    outline: none;
  }
  .textarea-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
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
`;

export default StyledTextareaComponent;
