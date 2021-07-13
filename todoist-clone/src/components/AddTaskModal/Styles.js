import styled from "styled-components";
import Button from "shared/components/Button";

export const AddTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
export const AddTaskHeader = styled.div`
    margin-bottom: 15px;
    & h1 {
        font-size: 15px;
    }
`;
export const AddTaskForm = styled.div`
    width: 450px;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    z-index: 10000;
    padding: 5px 2px;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const AddTaskInput = styled.div`
    flex: 1;
    padding: 4px 8px;
    line-height: 1.2em;
    margin-bottom: 15px;
    font-size: 15px;
    outline: none;
`;

export const PlaceHolder = styled.div`
    font-size: 15px;
    color: #999;
    user-select: none;
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
`;

export const SubmitButton = styled(Button)`
    color: white;
    background-color: #db4c3f;
    align-self: flex-start;
    padding: 6px 10px;
    & span {
        font-size: 14px;
        font-weight: 700;
    }
`;
