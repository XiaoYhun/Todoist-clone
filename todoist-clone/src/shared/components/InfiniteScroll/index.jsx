import React, { useRef, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { InfiniteScrollWrapper, InfiniteScrollContent } from "./Styles";

function InfiniteScroll({
    children,
    className,
    onBottomHit = () => {},
    loadMore = true,
    onScroll = () => {},
}) {
    const $wrapperRef = useRef();
    const $contentRef = useRef();
    const [isLoading, setLoading] = useState(false);

    const isBottomReach = () => {
        const wrapperRect = $wrapperRef.current.getBoundingClientRect();
        const contentRect = $contentRef.current.getBoundingClientRect();

        if (wrapperRect.bottom >= contentRect.bottom) {
            setLoading(true);
            onBottomHit();
        }
    };

    useMemo(() => {
        if (isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    const handleMouseScroll = () => {
        onScroll($wrapperRef);
        if (!isLoading && loadMore) isBottomReach();
    };
    return (
        <InfiniteScrollWrapper
            className={className}
            ref={$wrapperRef}
            onScroll={handleMouseScroll}
        >
            <InfiniteScrollContent ref={$contentRef}>
                <div>{children}</div>
            </InfiniteScrollContent>
        </InfiniteScrollWrapper>
    );
}

InfiniteScroll.propTypes = {};

export default InfiniteScroll;
