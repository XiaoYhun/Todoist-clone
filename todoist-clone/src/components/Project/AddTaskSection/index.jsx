import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddTaskButton, AddTaskSectionWrapper, SectionHeader } from "./Styles";
import icons from "shared/utils/icons";
import AddTaskInline from "../AddTaskInline";
function AddTaskSection({ placeHolder = "Add task", parentId, project }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <AddTaskSectionWrapper>
            {isEditing ? (
                <AddTaskInline
                    onSubmit={() => setIsEditing(false)}
                    onCancel={() => setIsEditing(false)}
                    parentId={parentId}
                    project={project}
                />
            ) : (
                <AddTaskButton onClick={() => setIsEditing(true)}>
                    <span>{icons.add}</span>
                    {placeHolder}
                </AddTaskButton>
            )}
        </AddTaskSectionWrapper>
    );
}

AddTaskSection.propTypes = {};

export default AddTaskSection;
