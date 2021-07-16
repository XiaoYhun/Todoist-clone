import { useEffect } from "react";

export const useDetectClickOutside = (
    $containerRef,
    $ignoredRef,
    onClickOutside
) => {
    const handleClickOutside = (e) => {
        if (
            $containerRef.current &&
            !$containerRef.current.contains(e.target) &&
            $ignoredRef.current.contains(e.target)
        ) {
            onClickOutside();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, []);
};

export const useOnEscapeKeyDown = (onEscapeKeyDown) => {
    const handleEscapeKeyDown = (e) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.keyCode === 27) onEscapeKeyDown();
    };
    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyDown);
        return () => {
            document.removeEventListener("keydown", handleEscapeKeyDown);
        };
    }, []);
};
