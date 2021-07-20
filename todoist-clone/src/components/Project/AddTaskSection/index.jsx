import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddTaskButton, AddTaskSectionWrapper, SectionHeader } from "./Styles";
import icons from "shared/utils/icons";
import AddTaskInline from "../AddTaskInline";
import moment from "moment";
function AddTaskSection(props) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <AddTaskSectionWrapper>
            <SectionHeader>
                <h2>Today - {moment().format("ddd DD MMM")}</h2>
            </SectionHeader>
            {isEditing ? (
                <AddTaskInline
                    onSubmit={() => setIsEditing(false)}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <AddTaskButton onClick={() => setIsEditing(true)}>
                    <span>{icons.add}</span>
                    Add task
                </AddTaskButton>
            )}
        </AddTaskSectionWrapper>
    );
}

AddTaskSection.propTypes = {};

export default AddTaskSection;
