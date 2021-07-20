import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import {
    SchedulePopperWrapper,
    ScheduleInput,
    ScheduleSuggestion,
    ScheduleDatePicker,
    ScheduleActions,
    SuggestionButton,
    SuggestionButtonIcon,
    SuggestionButtonLabel,
    SuggestionButtonWeekday,
    InfiniteScrollWrapper,
    DatePickerMonth,
    MonthHeader,
    DatePickerHeader,
    DatePickerWeekdayHeader,
} from "./Styles";
import Popper from "shared/components/Popper";
import icons from "shared/utils/icons";
import moment from "moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function SchedulePopper({ children, onDayClick = () => {}, selectedDay }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([0, 1, 2, 3, 4]);
    const [elRefs, setElRefs] = React.useState([]);
    const [focusingMonth, setFocusingMonth] = useState(0);
    useEffect(() => {
        setElRefs((elRefs) =>
            Array(data.length)
                .fill()
                .map((_, i) => elRefs[i] || createRef())
        );
    }, [data.length]);

    const handleScrollBottomHit = () => {
        setData((data) => [...data, data.length]);
    };

    const handleDayClick = (day, modifiers = {}) => {
        if (modifiers.disabled) {
            return;
        }
        onDayClick(day.getTime());
        setIsOpen(false);
    };

    const handleScroll = (wrapperRef) => {
        const wrapperTop = wrapperRef.current.getBoundingClientRect().top;

        elRefs.some((ref, index) => {
            const refRect = ref.current.getBoundingClientRect();
            if (
                wrapperTop &&
                refRect.top <= wrapperTop &&
                refRect.bottom > wrapperTop
            ) {
                setFocusingMonth(index);
                return true;
            }
        });
    };

    return (
        <Popper
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            renderContent={() => (
                <SchedulePopperWrapper>
                    <ScheduleInput>
                        <input
                            placeholder="Type a due date"
                            onChange={(value) => setInputValue(value)}
                        ></input>
                    </ScheduleInput>
                    <ScheduleSuggestion>
                        <SuggestionButton
                            onClick={() => handleDayClick(moment().toDate())}
                        >
                            <SuggestionButtonIcon>
                                {icons.today}
                            </SuggestionButtonIcon>
                            <SuggestionButtonLabel>Today</SuggestionButtonLabel>
                            <SuggestionButtonWeekday>
                                {moment().format("ddd")}
                            </SuggestionButtonWeekday>
                        </SuggestionButton>
                        <SuggestionButton
                            onClick={() =>
                                handleDayClick(moment().add(1, "d").toDate())
                            }
                        >
                            <SuggestionButtonIcon>
                                {icons.sun}
                            </SuggestionButtonIcon>
                            <SuggestionButtonLabel>
                                Tomorrow
                            </SuggestionButtonLabel>
                            <SuggestionButtonWeekday>
                                {moment().add(1, "d").format("ddd")}
                            </SuggestionButtonWeekday>
                        </SuggestionButton>
                        <SuggestionButton
                            onClick={() =>
                                handleDayClick(moment().weekday(8).toDate())
                            }
                        >
                            <SuggestionButtonIcon>
                                {icons.nextWeek}
                            </SuggestionButtonIcon>
                            <SuggestionButtonLabel>
                                Next week
                            </SuggestionButtonLabel>
                            <SuggestionButtonWeekday>
                                {moment().weekday(8).format("ddd DD MMM")}
                            </SuggestionButtonWeekday>
                        </SuggestionButton>
                    </ScheduleSuggestion>
                    <ScheduleDatePicker>
                        <DatePickerHeader>
                            {moment()
                                .add(focusingMonth, "months")
                                .format("MMM yyyy")}
                        </DatePickerHeader>
                        <DatePickerWeekdayHeader></DatePickerWeekdayHeader>
                        <InfiniteScrollWrapper
                            onBottomHit={handleScrollBottomHit}
                            onScroll={handleScroll}
                        >
                            {data.map((item) => {
                                const month = moment().add(item, "months");
                                return (
                                    <DatePickerMonth
                                        ref={elRefs[item]}
                                        key={item}
                                    >
                                        {item > 0 && (
                                            <MonthHeader>
                                                {month.format("MMM")}
                                            </MonthHeader>
                                        )}
                                        <DayPicker
                                            key={item}
                                            month={month.toDate()}
                                            disabledDays={{
                                                before: moment().toDate(),
                                            }}
                                            modifiers={{
                                                highlighted:
                                                    moment(
                                                        selectedDay
                                                    ).toDate(),
                                            }}
                                            showWeekDays={false}
                                            captionElement={() => <></>}
                                            navbarElement={() => <></>}
                                            onDayClick={handleDayClick}
                                        />
                                    </DatePickerMonth>
                                );
                            })}
                        </InfiniteScrollWrapper>
                    </ScheduleDatePicker>
                    <ScheduleActions></ScheduleActions>
                </SchedulePopperWrapper>
            )}
        >
            {React.isValidElement(children) &&
                React.cloneElement(children, {
                    onClick: () => {
                        setIsOpen(true);
                    },
                })}
        </Popper>
    );
}

SchedulePopper.propTypes = {};

export default SchedulePopper;
