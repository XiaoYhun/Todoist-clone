import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { TooltipWrapper, TooltipText } from "./Styles";

const $root = document.getElementById("root");

function Tooltip({ isOpen = false, parentRef, children }) {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                if (parentRef.current && tooltipRef.current && isOpen) {
                    setPosition(calculatePos(parentRef, tooltipRef));
                    setOpen(true);
                }
            }, 200);
        } else {
            setOpen(false);
        }
    }, [isOpen, parentRef]);

    const tooltipRef = useRef();
    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <TooltipWrapper
                    isOpen={open}
                    top={position.top}
                    left={position.left}
                    ref={tooltipRef}
                >
                    <TooltipText>{children}</TooltipText>
                </TooltipWrapper>
            )}
        </>,
        $root
    );
}

const calculatePos = (parentRef, tooltipRef) => {
    var parentRect = parentRef.current.getBoundingClientRect();
    var tooltipRect = tooltipRef.current.getBoundingClientRect();
    return {
        top: parentRect.height + 10 + parentRect.top,
        left:
            Number(parentRect.width * 0.5 - tooltipRect.width * 0.5) +
            parentRect.left,
    };
};
Tooltip.propTypes = {};

export default Tooltip;
