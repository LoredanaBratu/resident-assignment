import styled from "styled-components";
import Colors from "../../constants/colorConstants";

const StyledFooter = styled.div`
  background-color: ${Colors.lightGrey};
  bottom: 0;
  width: 100%;
  padding: 20px;
  position: fixed;
  box-sizing: border-box;

  .actions-buttons {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledFooter;
