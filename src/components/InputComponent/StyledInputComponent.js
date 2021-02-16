import styled from "styled-components";

const StyledInputComponent = styled.div`
  position: relative;
  height: 22px;
  display: flex;
  .input-label {
    padding-right: 5px;
  }
  .right-icon {
    position: absolute;
    height: 16px;
    vertical-align: middle;
    z-index: 2;
    right: 10px;
    top: 3px;
  }
  .input {
    margin-right: 5px;
    &--extraSmall {
      width: 70px;
    }
    &--small {
      width: 100px;
    }
    &--large {
      width: 100%;
    }
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .error-message {
    color: red;
    font-size: 12px;
  }
`;

export default StyledInputComponent;
