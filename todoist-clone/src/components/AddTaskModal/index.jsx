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
import SchedulePopper from "components/SchedulePopper";
import moment from "moment";
function AddTaskModal(props) {
    const [value, setValue] = useState("");
    const [date, setDate] = useState(moment());

    const handleDayClick = (date) => {
        setDate(date);
    };

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
                            <SchedulePopper
                                selectedDate={date}
                                onDayClick={handleDayClick}
                            >
                                <ProjectButton
                                    hasIcon
                                    iconType="calendar"
                                    id="today"
                                >
                                    {moment(date).format("DD MMM")}
                                </ProjectButton>
                            </SchedulePopper>
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
