import styled from "styled-components";
import Button from "shared/components/Button";
export const AddTaskSectionWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    flex: 1;
    margin-top: 35px;
`;
export const SectionHeader = styled.header`
    border-bottom: 1px solid #f0f0f0;
    background-color: white;
    display: flex;
    align-items: center;
    position: sticky;

    & h2 {
        font-size: 14px;
        font-weight: 700;
        padding: 6px 30px 5px 0;
    }
`;
export const AddTaskButton = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 34px;
    color: grey !important;
    & span {
        color: red;
        margin-right: 11px;
    }
    & span svg {
        border-radius: 50%;
        height: 18px;
        width: 18px;
    }
    &:hover {
        color: #dd4b39 !important;
    }
    &:hover span svg {
        background-color: #dd4b39;
        color: white;
    }
`;
