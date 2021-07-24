import { useEffect, useState, useRef, useCallback } from "react";

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

export const useOnEscapeKeyDown = (onEscapeKeyDown = () => {}) => {
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

export const useOnEnterKeyDown = (onEnterKeyDown = () => {}) => {
    const handleEnterKeyDown = (e) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.keyCode === 13) onEnterKeyDown();
    };
    useEffect(() => {
        document.addEventListener("keydown", handleEnterKeyDown);
        return () => {
            document.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, []);
};

export const useStateCallback = (initialValue) => {
    const [val, setVal] = useState(initialValue);
    const callbackRef = useRef();

    useEffect(() => {
        callbackRef.current && callbackRef.current(val);
    }, [val]);

    var setValCallback = useCallback((newValue, callback) => {
        if (callback && typeof callback === "function") {
            callbackRef.current = callback;
        }
        setVal(newValue);
    }, []);
    return [val, setValCallback];
};
