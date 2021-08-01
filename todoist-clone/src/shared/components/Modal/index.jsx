import React, {
    useState,
    useEffect,
    useRef,
    Fragment,
    useImperativeHandle,
} from "react";
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
    hasCloseButton: true,
};

const $root = document.getElementById("root");
function Modal(
    { className, children, isOpen, onClose = () => {}, isGrow, hasCloseButton },
    ref
) {
    const [stateIsOpen, setIsOpen] = useState(isOpen);
    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };
    useOnEscapeKeyDown(handleClose);

    useImperativeHandle(
        ref,
        () => ({
            close: handleClose,
        }),
        []
    );

    return (
        <Fragment>
            {stateIsOpen &&
                ReactDOM.createPortal(
                    <ModalWrapper isOpen={stateIsOpen}>
                        <ModalOverlay onClick={handleClose}>
                            <ModalContent
                                isGrow={isGrow}
                                onClick={(e) => e.stopPropagation()}
                                className={className}
                            >
                                {hasCloseButton && (
                                    <CloseIcon>
                                        <Button
                                            hasIcon
                                            iconType="close"
                                            onClick={handleClose}
                                        ></Button>
                                    </CloseIcon>
                                )}
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

export default React.forwardRef(Modal);
