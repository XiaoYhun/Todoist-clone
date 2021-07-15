import React, {
    useState,
    Fragment,
    useRef,
    useLayoutEffect,
    useEffect,
} from "react";
import PropTypes from "prop-types";
import { PopperWrapper, PopperOverlay, PopperContent } from "./Styles";
import ReactDOM from "react-dom";
import { useDetectClickOutside, useOnEscapeKeyDown } from "shared/utils/hooks";

const $root = document.getElementById("root");

function Popper({
    isOpen,
    children,
    onClose = () => {},
    renderContent = () => {},
}) {
    const [stateIsOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const $contentRef = useRef();
    const $windowRef = useRef();
    const $linkRef = useRef();
    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    const calculatePos = () => {
        var pos = { x: 0, y: 0 };

        const windowRect = $windowRef.current.getBoundingClientRect();
        const parentRect = $linkRef.current.getBoundingClientRect();
        const contentRect = $contentRef.current.getBoundingClientRect();

        pos.x = parentRect.left - contentRect.width / 2 + parentRect.width / 2;
        pos.y = parentRect.bottom + 5;

        if (pos.x + contentRect.width > windowRect.right - 10) {
            pos.x = windowRect.right - contentRect.width - 10;
        }

        if (pos.y + contentRect.height > windowRect.bottom - 10) {
            pos.y = windowRect.bottom - contentRect.height - 10;
        }

        setPosition(pos);
    };

    useLayoutEffect(() => {
        if ($windowRef.current && $linkRef.current && stateIsOpen)
            calculatePos();

        if (stateIsOpen) {
            window.addEventListener("resize", calculatePos);
            window.addEventListener("scroll", calculatePos);
        }
        return () => {
            console.log("cleared");
            window.removeEventListener("resize", calculatePos);
            window.removeEventListener("scroll", calculatePos);
        };
    }, [$windowRef, $linkRef, stateIsOpen]);

    useDetectClickOutside($contentRef, handleCloseClick);
    useOnEscapeKeyDown(handleCloseClick);
    return (
        <div ref={$linkRef}>
            {stateIsOpen &&
                ReactDOM.createPortal(
                    <PopperWrapper isOpen={stateIsOpen}>
                        <PopperOverlay ref={$windowRef}>
                            <PopperContent
                                ref={$contentRef}
                                position={position}
                            >
                                {renderContent()}
                            </PopperContent>
                        </PopperOverlay>
                    </PopperWrapper>,
                    $root
                )}
            {children}
        </div>
    );
}

Popper.propTypes = {};

export default Popper;
