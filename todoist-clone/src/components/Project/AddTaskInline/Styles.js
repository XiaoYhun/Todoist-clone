import styled, { css } from "styled-components";
import Button from "shared/components/Button";

export const AddTaskForm = styled.div``;

export const AddTaskEditArea = styled.div`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    z-index: 10000;
    padding: 5px 2px;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 4px;
`;
export const AddTaskInput = styled.div`
    flex: 1;
    padding: 4px 8px;
    line-height: 1.2em;
    margin-bottom: 15px;
    font-size: 14px;
    outline: none;

    &:empty:before {
        color: #999;
        content: attr(data-placeholder);
    }
`;
export const TaskExtraButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const ProjectButtons = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-bottom: 5px;
`;

export const ProjectButton = styled(Button)`
    padding: 6px;
    border: 1px solid #ccc;
    margin-right: 10px;

    & span {
        color: #444;
        font-size: 13px !important;
    }

    &#today {
        color: green;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ActionButton = styled(Button)`
    width: 28px;
    height: 28px;
    margin: 0 5px;

    ${(props) =>
        props.fillColor &&
        css`
            & svg path {
                fill: ${props.fillColor};
            }
        `}
`;

export const SubmitButtons = styled.div`
    display: flex;
`;
export const AddButton = styled(Button)`
    background-color: #dd4b39;
    color: white;
    padding: 6px 8px;
    margin-right: 10px;
    & span {
        font-size: 14px;
        font-weight: 700;
    }
`;
export const CancelButton = styled(Button)`
    & span {
        font-size: 14px;
    }
`;
