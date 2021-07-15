import styled, { css } from "styled-components";
import { zIndexValues } from "shared/utils/styles";
export const PopperWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    //opacity: ${(props) => (props.isOpen ? 1 : 0)};
    z-index: ${zIndexValues.popper};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const PopperOverlay = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;

    flex-grow: 1;
`;
export const PopperContent = styled.div`
    position: absolute;
    min-width: 250px;
    min-height: 100px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ position }) => css`
        top: ${position.y + "px"};
        left: ${position.x + "px"};
    `}
`;
