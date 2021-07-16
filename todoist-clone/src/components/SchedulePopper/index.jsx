import React, { useState } from "react";
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
} from "./Styles";
import Popper from "shared/components/Popper";
import icons from "shared/utils/icons";
import moment from "moment";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

function SchedulePopper({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
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
                        <SuggestionButton>
                            <SuggestionButtonIcon>
                                {icons.today}
                            </SuggestionButtonIcon>
                            <SuggestionButtonLabel>Today</SuggestionButtonLabel>
                            <SuggestionButtonWeekday>
                                {moment().format("ddd")}
                            </SuggestionButtonWeekday>
                        </SuggestionButton>
                        <SuggestionButton>
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
                        <SuggestionButton>
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
                        <InfiniteCalendar
                            width={250}
                            height={200}
                            selected={moment()}
                            minDate={moment().weekday(-6)}
                            displayOptions={{
                                showHeader: false,
                                showWeekdays: false,
                                showOverlay: false,
                                showTodayHelper: false,
                            }}
                            min={moment()}
                        />
                    </ScheduleDatePicker>
                    <ScheduleActions></ScheduleActions>
                </SchedulePopperWrapper>
            )}
        >
            {React.cloneElement(children, { onClick: () => setIsOpen(true) })}
        </Popper>
    );
}

SchedulePopper.propTypes = {};

export default SchedulePopper;
