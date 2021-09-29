import styled from "styled-components";
import Button from "shared/components/Button";

export const AddProjectModalWrapper = styled.div`
  width: 350px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const InputTitle = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
`;

export const ControlWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > input {
    padding: 6px;
  }
  > input,
  > div {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ddd;
    transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: none;
    border-radius: 4px;
  }
  > *:focus {
    border-color: grey;
  }
`;

export const ConfirmAction = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;

  Button span {
    font-size: 13px !important;
    font-weight: 700;
    line-height: 17px;
    margin: 0px;
    text-align: center;
  }

  Button {
    margin-left: 10px;
    min-width: 60px;
    padding: 6px 12px 7px;
  }
`;
export const CancelButton = styled(Button)`
  color: #202020;
  border: 1px solid #ddd;
  background: #f3f3f3;
`;
export const ConfirmButton = styled(Button)`
  background-color: #db4c3f;
  color: #fff !important;
  :hover {
    background-color: #db4c3f !important;
  }
`;
