import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "shared/components/Button";

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

    const handleCloseClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
        onClose();
    };
    return (
        <Fragment>
            {stateIsOpen && (
                <ModalWrapper isOpen={stateIsOpen}>
                    <ModalBackground isOpen={stateIsOpen}>
                        <ModalContent isGrow={isGrow}>
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
