import React, { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
    AddTaskHeader,
    AddTaskWrapper,
    AddTaskForm,
    TaskExtraButtons,
    AddTaskInput,
    PlaceHolder,
    ProjectButtons,
    ActionButtons,
    ProjectButton,
    ActionButton,
    SubmitButton,
} from "./Styles";
import Modal from "shared/components/Modal";
import SchedulePopper from "components/SchedulePopper";
import moment from "moment";
import { formatDate } from "shared/utils/dateTime";
import { addTask } from "slices/tasksSlice";
import PrioritySelectDropdown from "components/PrioritySelectDropdown";
import { priorityColor } from "shared/utils/styles";
function AddTaskModal({ isOpen, ...props }) {
    const [text, setText] = useState("");
    const [date, setDate] = useState(moment().valueOf());
    const [priority, setPriority] = useState(0);
    const dispatch = useDispatch();
    const $modalRef = useRef();

    const $inputRef = useCallback((input) => {
        if (input !== null) input.focus();
    }, []);

    const handleAddTask = () => {
        dispatch(addTask({ text: text, date: date, priority: priority }));
        setText("");
        setDate(moment().valueOf());
        setPriority(0);
        $modalRef.current.close();
    };
    const emitChange = (e) => {
        setText(e.target.innerText);
    };
    const handleClose = () => {};
    return (
        <Modal isOpen={isOpen} onClose={handleClose} {...props} ref={$modalRef}>
            <AddTaskWrapper>
                <AddTaskHeader>
                    <h1>Quick Add Task</h1>
                </AddTaskHeader>
                <AddTaskForm>
                    <AddTaskInput
                        ref={$inputRef}
                        contentEditable="true"
                        role="textbox"
                        data-placeholder="Task name"
                        dangerouslySetInnerHTML={{ __html: text }}
                        onBlur={emitChange}
                        tabIndex={0}
                    />
                    <TaskExtraButtons>
                        <ProjectButtons>
                            <SchedulePopper
                                selectedDate={date}
                                onDayClick={() => setDate(date)}
                            >
                                <ProjectButton
                                    hasIcon
                                    iconType="calendar"
                                    id="today"
                                >
                                    {formatDate(+date)}
                                </ProjectButton>
                            </SchedulePopper>
                            <ProjectButton hasIcon iconType="inbox">
                                Inbox
                            </ProjectButton>
                        </ProjectButtons>
                        <ActionButtons>
                            <ActionButton hasIcon iconType="tag"></ActionButton>
                            <PrioritySelectDropdown
                                value={priority}
                                onChange={(p) => setPriority(p)}
                            >
                                <ActionButton
                                    hasIcon
                                    tooltip="Set priority"
                                    iconType={
                                        priority >= 1 && priority < 4
                                            ? "flagFill"
                                            : "flag"
                                    }
                                    fillColor={priorityColor[priority]}
                                />
                            </PrioritySelectDropdown>
                            <ActionButton
                                hasIcon
                                iconType="clock"
                            ></ActionButton>
                            <ActionButton
                                hasIcon
                                iconType="comment"
                            ></ActionButton>
                        </ActionButtons>
                    </TaskExtraButtons>
                </AddTaskForm>
                <SubmitButton onClick={handleAddTask}>Add task</SubmitButton>
            </AddTaskWrapper>
        </Modal>
    );
}

AddTaskModal.propTypes = {};

export default AddTaskModal;
