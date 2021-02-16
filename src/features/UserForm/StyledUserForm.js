import styled from "styled-components";

const StyledUserForm = styled.div`
  .project-details {
    display: flex;
    align-items: center;
  }
  .user-form-container {
    margin: 0 auto;
    max-width: 500px;
    box-sizing: border-box;
    padding: 15px 15px 110px 15px;
  }
  .add-section-icon {
    height: 20px;
    transform: rotate(45deg);
    margin-left: 5px;
  }
  .projects-tags {
    display: flex;
    flex-wrap: wrap;
  }
  .clear-icon {
    height: 20px;
  }
  .json-string {
    padding: 20px;
  }
`;

export default StyledUserForm;
