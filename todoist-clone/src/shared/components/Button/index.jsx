import React, { forwardRef, Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";
import icons from "shared/utils/icons";
import styled from "styled-components";
import Tooltip from "shared/components/Tooltip";
export const ButtonWrapper = styled.button`
    border: none;
    background: none;
    border-radius: 3px;
    color: grey;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    &:hover {
        color: #202020;
        background-color: #eee;
    }
    & span {
        font-size: 12px;
        margin-left: 3px;
        margin-right: 6px;
        word-break: normal;
    }
`;
const Button = ({
    hasIcon,
    iconType,
    children,
    className,
    tooltip,
    ...buttonProps
}) => {
    const [openTooltip, setOpenTooltip] = useState(false);
    const buttonRef = useRef();
    return (
        <ButtonWrapper
            className={className}
            type="button"
            ref={buttonRef}
            {...buttonProps}
            onMouseEnter={() => setOpenTooltip(true)}
            onMouseLeave={() => setOpenTooltip(false)}
        >
            {hasIcon && icons[iconType]}
            {children && <span>{children}</span>}
            {tooltip && (
                <Tooltip isOpen={openTooltip} parentRef={buttonRef}>
                    {tooltip}
                </Tooltip>
            )}
        </ButtonWrapper>
    );
};
Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    iconType: PropTypes.string,
    tooltip: PropTypes.string,
};

Button.defaultProps = {
    hasIcon: false,
};

export default Button;
