import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import { useDetectClickOutside, useOnEscapeKeyDown } from "shared/utils/hooks";

import {
    ModalWrapper,
    ModalBackground,
    ModalContent,
    CloseIcon,
} from "./Styles";
import { Fragment } from "react";

function Modal({ children, isOpen, onClose = () => {}, isGrow }) {
    const [stateIsOpen, setIsOpen] = useState(isOpen);
    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const $contentRef = useRef();

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    useDetectClickOutside($contentRef, handleCloseClick);
    useOnEscapeKeyDown(handleCloseClick);

    return (
        <Fragment>
            {stateIsOpen && (
                <ModalWrapper isOpen={stateIsOpen}>
                    <ModalBackground>
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
                    </ModalBackground>
                </ModalWrapper>
            )}
        </Fragment>
    );
}

Modal.propTypes = {};

export default Modal;
