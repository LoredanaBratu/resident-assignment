import styled from "styled-components";
import Colors from "../../constants/colorConstants";

const StyledProjectDetails = styled.div`
  margin: 10px 0px;
  position: relative;
  padding: 15px 10px;
  border: 1px dashed ${Colors.gray};

  .duration-container {
    display: flex;
    align-items: center;
  }
  .duration-section {
    display: flex;
    margin: 0 auto;
  }
  .delete-section-icon {
    top: -10px;
    height: 20px;
    right: -10px;
    position: absolute;
  }
`;

export default StyledProjectDetails;
