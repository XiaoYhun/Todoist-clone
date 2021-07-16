import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import { useDetectClickOutside, useOnEscapeKeyDown } from "shared/utils/hooks";

import { ModalWrapper, ModalOverlay, ModalContent, CloseIcon } from "./Styles";

const propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    isGrow: PropTypes.bool,
};

const defaultProps = {
    children: undefined,
    isOpen: false,
    onClose: () => {},
    isGrow: false,
};

const $root = document.getElementById("root");
function Modal({ children, isOpen, onClose = () => {}, isGrow }) {
    const [stateIsOpen, setIsOpen] = useState(isOpen);
    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const $contentRef = useRef();
    const $overlayRef = useRef();

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    useDetectClickOutside($contentRef, $overlayRef, handleCloseClick);
    useOnEscapeKeyDown(handleCloseClick);

    return (
        <Fragment>
            {stateIsOpen &&
                ReactDOM.createPortal(
                    <ModalWrapper isOpen={stateIsOpen}>
                        <ModalOverlay ref={$overlayRef}>
                            <ModalContent ref={$contentRef} isGrow={isGrow}>
                                <CloseIcon>
                                    <Button
                                        hasIcon
                                        iconType="close"
                                        onClick={handleCloseClick}
                                    ></Button>
                                </CloseIcon>
                                {children}
                            </ModalContent>
                        </ModalOverlay>
                    </ModalWrapper>,
                    $root
                )}
        </Fragment>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
