import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    ProjectContentWrapper,
    ContentSection,
    SectionHeader,
    ContentList,
    SectionHeaderActions,
} from "./Styles";
import ContentItem from "./ContentItem";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateTasksOrder, saveTasksOrder } from "slices/tasksSlice";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function ProjectContent({ tasksList }) {
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState("");

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        let tasks = reorder(tasksList, source.index, destination.index);
        tasks = tasks.map((item, index) => {
            return {
                ...item,
                order: index,
            };
        });
        dispatch(updateTasksOrder(tasks));
        dispatch(saveTasksOrder(tasks));
    };

    const handleEditRequest = (id) => {
        setEditingId(id);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <ProjectContentWrapper>
                <ContentSection>
                    <SectionHeader>
                        <h2>Overdue</h2>
                        <SectionHeaderActions>Reschedule</SectionHeaderActions>
                    </SectionHeader>
                    <Droppable droppableId={"615615"}>
                        {(provided) => (
                            <ContentList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {tasksList.map((item) => (
                                    <ContentItem
                                        key={item._id}
                                        task={item}
                                        index={item.order}
                                        editingId={editingId}
                                        editRequest={handleEditRequest}
                                    ></ContentItem>
                                ))}
                                {provided.placeholder}
                            </ContentList>
                        )}
                    </Droppable>
                </ContentSection>
                {/* <ContentSection>
                <SectionHeader></SectionHeader>
                <ContentList></ContentList>
                </ContentSection>
                <ContentSection>
                <SectionHeader></SectionHeader>
                <ContentList></ContentList>
            </ContentSection> */}
            </ProjectContentWrapper>
        </DragDropContext>
    );
}

ProjectContent.propTypes = {};

export default ProjectContent;
