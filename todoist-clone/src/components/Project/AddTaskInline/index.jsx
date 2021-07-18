import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
    AddTaskForm,
    AddTaskEditArea,
    AddTaskInput,
    TaskExtraButtons,
    ProjectButtons,
    ProjectButton,
    ActionButtons,
    ActionButton,
    SubmitButtons,
    AddButton,
    CancelButton,
} from "./Styles";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "slices/tasksSlice";
import { priorityColor } from "shared/utils/styles";
import PrioritySelectDropdown from "./../../PrioritySelectDropdown/index";
import SchedulePopper from "components/SchedulePopper";
import moment from "moment";
function AddTaskInline({
    onSubmit = () => {},
    onSave = () => {},
    onCancel = () => {},
    isEdit = false,
    task = {},
}) {
    const [text, setText] = useState(isEdit ? task.text : "");
    const [priority, setPriority] = useState(isEdit ? task.priority : 0);
    const [date, setDate] = useState(isEdit ? task.date : Date.now());
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEdit && task.text) {
            setText(task.text);
        }
    }, [isEdit, task.text]);

    const handleSubmitNewTask = (e) => {
        e.preventDefault();
        dispatch(addTask({ text: text, priority: 0, date: date }));
        setText("");
        onSubmit(e);
    };

    const handleSaveTask = (e) => {
        e.preventDefault();
        const newTask = { ...task, text: text, priority: priority, date: date };
        try {
            dispatch(updateTask(newTask));
        } catch (error) {
            console.log(error);
        }
        setText("");
        onSave(text);
    };

    const emitChange = (e) => {
        setText(e.target.innerText);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleDatePick = (value) => {
        setDate(value);
    };
    return (
        <AddTaskForm>
            <AddTaskEditArea>
                <AddTaskInput
                    contentEditable="true"
                    role="textbox"
                    data-placeholder="Task name"
                    dangerouslySetInnerHTML={{ __html: text }}
                    onBlur={emitChange}
                />
                <TaskExtraButtons>
                    <ProjectButtons>
                        <SchedulePopper
                            selected={date}
                            onDayClick={handleDatePick}
                        >
                            <ProjectButton
                                hasIcon
                                iconType="calendar"
                                id="today"
                            >
                                {moment(+date).format("DD MMM")}
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
                            onChange={handlePriorityChange}
                        >
                            <ActionButton
                                hasIcon
                                iconType={
                                    priority && priority < 4
                                        ? "flagFill"
                                        : "flag"
                                }
                                fillColor={priorityColor[priority]}
                            />
                        </PrioritySelectDropdown>
                        <ActionButton hasIcon iconType="clock"></ActionButton>
                        <ActionButton hasIcon iconType="comment"></ActionButton>
                    </ActionButtons>
                </TaskExtraButtons>
            </AddTaskEditArea>
            <SubmitButtons>
                {isEdit ? (
                    <AddButton onClick={handleSaveTask}>Save</AddButton>
                ) : (
                    <AddButton onClick={handleSubmitNewTask}>
                        Add task
                    </AddButton>
                )}
                <CancelButton
                    onClick={() => {
                        setText("");
                        onCancel();
                    }}
                >
                    Cancel
                </CancelButton>
            </SubmitButtons>
        </AddTaskForm>
    );
}

AddTaskInline.propTypes = {};

export default AddTaskInline;
