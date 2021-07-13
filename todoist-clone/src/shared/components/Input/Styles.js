import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: text;

    & svg {
        position: absolute;
        left: 5px;
        fill: white;
    }
`;
export const InputElement = styled.input`
    margin: 0;
    border: 1px solid transparent;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
    color: #fff;
    padding: 5px 0 5px ${(props) => (props.hasIcon ? "34px" : "0px")};
    background: hsla(0, 0%, 100%, 0.2);
    transition: width 0.2s ease-in,
        background 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &::placeholder {
        color: white;
        opacity: 1;
        font-size: 14px;
    }
`;
