import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Button from "shared/components/Button";

const CircleButton = styled(Button)`
    border: 1px solid grey;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 10px 0 0;
    z-index: 1;
    align-self: start;
    & svg {
        overflow: overlay;
        margin-top: -6px;
        margin-left: -9px;
        opacity: 0;
        height: 16px;
        width: 16px;
        transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
    }
    &:hover svg,
    &.done svg {
        opacity: 1;
    }
    ${(props) =>
        props.color &&
        css`
            border-width: 2px;
            width: 18px;
            height: 18px;
            color: ${props.color} !important;
            border-color: ${props.color};
        `}
`;

const ColoredCircleButton = forwardRef(
    ({ color, done = false, ...propsButton }, ref) => {
        return (
            <CircleButton
                hasIcon
                iconType="circle"
                color={color}
                className={done && "done"}
                {...propsButton}
            ></CircleButton>
        );
    }
);

ColoredCircleButton.propTypes = {};

export default ColoredCircleButton;
