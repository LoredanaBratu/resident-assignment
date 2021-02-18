import styled from "styled-components";

const StyledInputComponent = styled.div`
  display: flex;
  position: relative;
  input:focus {
    outline: none;
  }
  .input-label {
    padding-right: 5px;
  }
  .right-icon {
    top: 3px;
    z-index: 2;
    right: 10px;
    height: 16px;
    position: absolute;
    vertical-align: middle;
  }
  .input {
    max-height: 22px;
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
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledInputComponent;
