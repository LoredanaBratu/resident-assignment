import styled from "styled-components";
import Colors from "../../constants/colorConstants";

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
    margin-left: 5px;
    transform: rotate(45deg);
  }
  .projects-tags {
    display: flex;
    flex-wrap: wrap;
  }
  .clear-icon {
    height: 20px;
  }
  .json-string {
    margin: 0 auto;
    max-width: 700px;
    box-sizing: border-box;
    word-break: break-word;
    padding: 25px 2px 110px 2px;
    color: ${Colors.lightBlue};
  }
  .username-input {
    flex: 1;
    flex-direction: column;
  }
`;

export default StyledUserForm;
