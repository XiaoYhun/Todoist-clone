import styled from "styled-components";
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    background-color: ${(props) =>
        props.isOpen ? "rgba(0, 0, 0, 0.5)" : "none"};
    -webkit-animation: fadein 0.2s;
    animation: fadein 0.2s;
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.5s;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalOverlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    transition: background-color 0.5s;
    animation: fadeIn 0.2s;
    padding: 44px 0 20px 0;
    flex-grow: 1;
`;
export const ModalContent = styled.div`
    border-radius: 10px;
    background-color: white;
    box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.28);
    max-width: 650px;

    min-width: 200px;
    min-height: 130px;
    position: relative;
    ${(props) => props.isGrow && "flex-grow: 1; width: 100%;"}
`;

export const CloseIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 10px;
`;
