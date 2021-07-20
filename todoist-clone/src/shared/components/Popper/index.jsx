import React, {
    useState,
    useRef,
    useLayoutEffect,
    useMemo,
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
    isContextMenu,
    onClose = () => {},
    renderContent = () => {},
}) {
    const [stateIsOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [contextMenuPos, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const $contentRef = useRef();
    const $windowRef = useRef();
    const $linkRef = useRef();

    useMemo(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const handleCloseClick = () => {
        setIsOpen(false);
        onClose();
    };

    const calculatePos = () => {
        var pos = { x: 0, y: 0 };
        const contentRect = $contentRef.current.getBoundingClientRect();
        const windowRect = $windowRef.current.getBoundingClientRect();

        if (isContextMenu) {
            pos = { x: contextMenuPos.x, y: contextMenuPos.y };
        } else {
            const parentRect = $linkRef.current.getBoundingClientRect();
            pos.x =
                parentRect.left - contentRect.width / 2 + parentRect.width / 2;
            pos.y = parentRect.bottom + 5;
        }

        if (pos.x + contentRect.width > windowRect.right - 10) {
            pos.x = windowRect.right - contentRect.width - 10;
        }

        if (pos.y + contentRect.height > windowRect.bottom - 10) {
            pos.y = windowRect.bottom - contentRect.height - 10;
        }

        setPosition(pos);
    };

    const onContextMenuClick = (e) => {
        if ($linkRef.current.contains(e.target)) {
            e.preventDefault();
            setContextMenuPosition({ x: e.pageX, y: e.pageY });
            setIsOpen(true);
        }
    };

    useLayoutEffect(() => {
        if ($windowRef.current && $linkRef.current && stateIsOpen) {
            calculatePos();
        }

        if (stateIsOpen) {
            window.addEventListener("resize", calculatePos);
            window.addEventListener("scroll", calculatePos);
        }

        return () => {
            window.removeEventListener("resize", calculatePos);
            window.removeEventListener("scroll", calculatePos);
        };
    }, [$windowRef, $linkRef, stateIsOpen]);

    useDetectClickOutside($contentRef, $windowRef, handleCloseClick);
    useOnEscapeKeyDown(handleCloseClick);
    return (
        <div
            ref={$linkRef}
            onContextMenu={isContextMenu ? onContextMenuClick : false}
        >
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
            {React.isValidElement(children) &&
                React.cloneElement(children, {
                    className: "children",
                    onClick: () => {
                        setIsOpen(true);
                    },
                })}
        </div>
    );
}

Popper.propTypes = {};

export default Popper;
