import React from "react";
import styled from "styled-components";
import Icons from "shared/utils/icons";
const Button = styled.button`
    border: none;
    background-color: transparent;
    color: white;
    height: 28px;
    width: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    overflow: hidden;
    margin-right: 4px;
    &:hover {
        background-color: hsla(0, 0%, 100%, 0.2);
        border-radius: 3px;
    }
    & svg {
        height: 24px;
        width: 24px;
    }
    &.avatar {
        border-radius: 50%;
    }
`;

export default function NavButton(props) {
    return (
        <Button {...props}>
            {props.icon && Icons[props.icon]}
            {props.children}
        </Button>
    );
}
