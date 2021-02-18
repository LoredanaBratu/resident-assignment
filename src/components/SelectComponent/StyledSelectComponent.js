import styled from "styled-components";

const StyledSelectComponent = styled.div`
  display: flex;
  select {
    height: 22px;
  }
  .label-select {
    margin-right: 10px;
  }
  .select-project {
    width: 100%;
  }
  .select-duration {
    width: 70px;
  }
  .select-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledSelectComponent;
