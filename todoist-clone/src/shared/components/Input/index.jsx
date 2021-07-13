import React, { useRef, useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import { InputElement, StyledInput } from "./Styles";
import icons from "shared/utils/icons";

const Input = forwardRef(
    (
        { className, onChange, hasIcon, iconType, children, ...inputProps },
        ref
    ) => {
        return (
            <StyledInput className={className}>
                {hasIcon && iconType && icons[iconType]}
                <InputElement
                    onChange={onChange}
                    hasIcon={hasIcon}
                    ref={ref}
                    {...inputProps}
                ></InputElement>
                {children}
            </StyledInput>
        );
    }
);

Input.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    iconType: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
