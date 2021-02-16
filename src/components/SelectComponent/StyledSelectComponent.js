import styled from "styled-components";

const StyledSelectComponent = styled.div`
  height: 22px;
  display: flex;
  select {
    min-height: 22px;
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
  .error-message {
    color: red;
    font-size: 12px;
  }
  .select-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export default StyledSelectComponent;
