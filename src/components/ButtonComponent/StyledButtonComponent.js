import styled from "styled-components";
import Colors from "../../constants/colorConstants";

const StyledButtonComponent = styled.div`
  button:focus {
    outline: none;
  }
  .action-btn {
    height: 40px;
    width: 145px;
  }
  .json-btn {
    width: 115px;
    border-radius: 4px;
    margin-bottom: 10px;
    color: ${Colors.violet};
    border-color: ${Colors.violet};
  }
`;

export default StyledButtonComponent;
