import styled, { css } from "styled-components";
import InfiniteScroll from "shared/components/InfiniteScroll";

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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
`;
export const DatePickerHeader = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px 4px 16px;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
`;
export const DatePickerWeekdayHeader = styled.div``;
export const InfiniteScrollWrapper = styled(InfiniteScroll)`
    max-height: 200px;
    font-size: 13px;
    & .DayPicker-Month {
        margin: 0 !important;
    }

    & .DayPicker {
        width: 100%;
    }

    & .DayPicker-wrapper {
        padding-bottom: 0px;
    }

    & .DayPicker-Month {
        flex: 1;
    }
    & .DayPicker-Week {
        padding: 0 10px;
        margin-bottom: 4px;
        display: flex;
    }

    & .DayPicker-Day {
        font-size: 13px;
        padding: 0;
        width: 24px;
        height: 24px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 4px;
        transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    & .DayPicker-Day--today:not(.DayPicker-Day--highlighted) {
        color: #d1453b !important;
    }
    &
        .DayPicker-Day:hover:not(.DayPicker-Day--disabled, .DayPicker-Day--highlighted) {
        background: #f1f1f1 !important;
    }

    & .DayPicker-Day.DayPicker-Day--highlighted {
        background-color: #dd4b39 !important;
        color: white;
        font-weight: 700;
    }
`;

export const DatePickerMonth = styled.div`
    display: flex;
    flex-direction: column;
`;
export const MonthHeader = styled.div`
    font-size: 12px;
    font-weight: 700;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
    margin: 0 16px 4px;
`;
export const ScheduleActions = styled.div``;
