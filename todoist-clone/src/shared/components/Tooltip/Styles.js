import styled from "styled-components";

export const TooltipWrapper = styled.div`
    border-radius: 4px;
    background: #333;
    color: white;
    padding: 3px 4px;
    position: absolute;
    z-index: 999;
    display: flex;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};

    transition-property: opacity display;
    transition: display 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
export const TooltipText = styled.span`
    font-size: 14px;
    word-wrap: none;
    text-align: center;
    white-space: nowrap;
    &::after {
        content: " ";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #333 transparent;
    }
`;
