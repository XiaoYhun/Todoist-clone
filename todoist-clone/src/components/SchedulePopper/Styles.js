import styled from "styled-components";

export const SchedulePopperWrapper = styled.div`
    width: 250px;
    max-height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
`;
export const ScheduleInput = styled.div`
    display: flex;
    flex-shrink: 0;
    padding: 8px 10px 8px 13px;
    align-items: center;

    & input {
        width: 100%;
        line-height: 24px;
        border: none;
        outline: 0;
        box-sizing: border-box;
    }
`;
export const ScheduleSuggestion = styled.div`
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    flex-shrink: 0;
    padding: 4px 0;
`;
export const SuggestionButton = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 10px;
    line-height: 24px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
`;

export const SuggestionButtonIcon = styled.div`
    display: flex;
    position: relative;
    margin-right: 10px;
    color: grey;
    & svg {
        height: 24px !important;
        width: 24px !important;
    }
`;
export const SuggestionButtonLabel = styled.div`
    font-weight: 500;
    font-size: 13px;
    flex: 1;
`;
export const SuggestionButtonWeekday = styled.div`
    color: grey;
    font-size: 13px;
`;
export const ScheduleDatePicker = styled.div`
    &
`;
export const ScheduleActions = styled.div``;
