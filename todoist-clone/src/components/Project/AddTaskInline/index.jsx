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
function AddTaskInline({
    onSubmit = () => {},
    onSave = () => {},
    onCancel = () => {},
    isEdit = false,
    task = {},
}) {
    const [text, setText] = useState(isEdit ? task.text : "");
    const dispatch = useDispatch();
    const testref = useRef();
    useEffect(() => {
        if (isEdit && task.text) {
            setText(task.text);
        }
    }, [isEdit, task.text]);

    const handleSubmitNewTask = (e) => {
        e.preventDefault();
        dispatch(addTask({ text: text, priority: 0, date: new Date() }));
        setText("");
        onSubmit(e);
    };

    const handleSaveTask = (e) => {
        e.preventDefault();
        const newTask = { ...task, text: text };
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

    return (
        <AddTaskForm>
            <AddTaskEditArea ref={testref}>
                <AddTaskInput
                    contentEditable="true"
                    role="textbox"
                    data-placeholder="Task name"
                    dangerouslySetInnerHTML={{ __html: text }}
                    onBlur={emitChange}
                />
                <TaskExtraButtons>
                    <ProjectButtons>
                        <ProjectButton hasIcon iconType="calendar" id="today">
                            Today
                        </ProjectButton>
                        <ProjectButton hasIcon iconType="inbox">
                            Inbox
                        </ProjectButton>
                    </ProjectButtons>
                    <ActionButtons>
                        <ActionButton hasIcon iconType="tag"></ActionButton>
                        <ActionButton
                            hasIcon
                            iconType={task.priority ? "flagFill" : "flag"}
                            fillColor={priorityColor[task.priority]}
                        ></ActionButton>
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
