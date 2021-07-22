import styled, { css } from "styled-components";
import Button from "shared/components/Button";
export const TaskDetailModalWrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 24px;
    width: 100%;
    box-sizing: border-box;
    min-height: 400px;
    max-height: 960px;
`;

export const DetailHeader = styled.div`
    padding-bottom: 5px;
`;
export const ProjectLink = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 4px 2px 2px;
    align-items: center;
`;
export const ProjectIcon = styled.div`
    margin-right: 10px;
    margin-left: 2px;
    color: grey;
`;
export const ProjectName = styled.div`
    font-size: 13px;
    color: #202020;
`;
export const TaskOverview = styled.div`
    display: flex;
    margin-top: 5px;
`;
export const TaskTabs = styled.div`
    flex-grow: 1;
    flex-direction: column;
    overflow: auto;
`;

export const CircleButton = styled(Button)`
    border: 1px solid grey;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    align-self: start;
    & svg {
        overflow: overlay;
        margin-top: -6px;
        margin-left: -9px;
        opacity: 0;
        height: 16px;
        width: 16px;
        transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
    }
    &:hover svg,
    &.done svg {
        opacity: 1;
    }
    ${(props) =>
        props.color &&
        css`
            border-width: 2px;
            width: 18px;
            height: 18px;
            color: ${props.color} !important;
            border-color: ${props.color};
        `}
`;
export const TaskOverviewMain = styled.div`
    margin-left: 15px;
    flex: 1;
`;
export const TaskOverviewHeader = styled.div`
    text-decoration: none;
    font-size: 16px;
    line-height: 23px;
    text-align: left;
    cursor: text;
    margin: -4px 0 0 -4px;
    word-break: break-word;

    &.done {
        text-decoration: line-through;
        color: grey;
    }
`;
export const TaskOverviewSub = styled.div`
    display: flex;
    flex-flow: row wrap;
    max-height: 80px;
    min-height: 33px;
    overflow: auto;
    padding-top: 15px;
    margin-left: -4px;
`;
export const TaskOverviewFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    &.disabled > * {
        cursor: default;
        opacity: 0.4;
        pointer-events: none;
    }
`;

export const DateDueButton = styled(Button)`
    color: red;
    transition-property: box-shadow, border;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    border: 1px solid #ccc;
    height: 28px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    transition: background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 5px;

    &:hover {
        background-color: #eee;
        color: red;
    }
`;

export const ActionButton = styled(Button)`
    width: 24px;
    height: 24px;
    margin-left: 8px;
    justify-content: center;
    align-items: center;
`;
