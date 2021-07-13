import React, { useState } from "react";
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
import Button from "shared/components/Button";
function AddTaskModal(props) {
    const [value, setValue] = useState("");
    return (
        <Modal {...props}>
            <AddTaskWrapper>
                <AddTaskHeader>
                    <h1>Quick Add Task</h1>
                </AddTaskHeader>
                <AddTaskForm>
                    <AddTaskInput contentEditable="true" role="textbox">
                        {value ? value : <PlaceHolder>Task name</PlaceHolder>}
                    </AddTaskInput>
                    <TaskExtraButtons>
                        <ProjectButtons>
                            <ProjectButton
                                hasIcon
                                iconType="calendar"
                                id="today"
                            >
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
                                iconType="flag"
                            ></ActionButton>
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
                <SubmitButton>Add task</SubmitButton>
            </AddTaskWrapper>
        </Modal>
    );
}

AddTaskModal.propTypes = {};

export default AddTaskModal;
