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
import { addTask, updateTask, addSubTask } from "slices/tasksSlice";
import { priorityColor } from "shared/utils/styles";
import PrioritySelectDropdown from "./../../PrioritySelectDropdown/index";
import SchedulePopper from "components/SchedulePopper";
import { useOnEnterKeyDown, useStateCallback } from "shared/utils/hooks";
import { formatDate } from "shared/utils/dateTime";
function AddTaskInline({
    onSubmit = () => {},
    onSave = () => {},
    onCancel = () => {},
    isEdit = false,
    task = {},
    parentId,
    project,
}) {
    const [text, setText] = useStateCallback(isEdit ? task.text : "");
    const [priority, setPriority] = useState(isEdit ? task.priority : 0);
    const [date, setDate] = useState(isEdit ? task.date : +new Date());
    const dispatch = useDispatch();
    const isSaving = useRef(false);
    useEffect(() => {
        if (isEdit && task.text) {
            setText(task.text);
        }
    }, [isEdit, task.text]);

    useEffect(() => {
        if (isSaving.current) {
            isSaving.current = false;
            if (isEdit) {
                const newTask = {
                    ...task,
                    text: text,
                    priority: priority,
                    date: date,
                };
                dispatch(updateTask(newTask));
                setText("");
                onSave(text);
            } else {
                dispatch(addTask({ text: text, priority: 0, date: date }));
                setText("");
                onSubmit();
            }
        }
    }, [text]);

    const handleSubmitNewTask = (e) => {
        e && e.preventDefault();
        if (parentId) {
            dispatch(
                addSubTask({
                    task: { text: text, priority: 0, date: date },
                    parentId: parentId,
                })
            );
        } else {
            dispatch(
                addTask({
                    text: text,
                    priority: 0,
                    date: date,
                    project: project ? project._id : null,
                })
            );
        }

        setText("");
        onSubmit(e);
    };

    const handleSaveTask = (e) => {
        e && e.preventDefault();
        const newTask = { ...task, text: text, priority: priority, date: date };
        dispatch(updateTask(newTask));
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
    const handleCancel = () => {
        onCancel();
    };

    useOnEnterKeyDown();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            setText(e.target.innerText);
            isSaving.current = true;
            isEdit ? handleSaveTask() : handleSubmitNewTask();
        }
        if (e.keyCode === 27) {
            handleCancel();
        }
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
                    onKeyDown={handleKeyPress}
                    tabIndex={0}
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
                                {date ? formatDate(+date) : "Schedule"}
                            </ProjectButton>
                        </SchedulePopper>
                        <ProjectButton
                            hasIcon
                            iconType={project ? "dot" : "inbox"}
                            fillColor={project ? project.color : null}
                        >
                            {project ? project.name : "Inbox"}
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
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </SubmitButtons>
        </AddTaskForm>
    );
}

AddTaskInline.propTypes = {};

export default AddTaskInline;
