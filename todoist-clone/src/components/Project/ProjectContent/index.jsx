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
import {
    updateTasksOrder,
    saveTasksOrder,
    updateTask,
} from "slices/tasksSlice";
import moment from "moment";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function ProjectContent({ todayTasks, overdueTasks }) {
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState("");
    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (
            !destination ||
            (destination.droppableId === "overdue" &&
                source.droppableId === "today")
        ) {
            return;
        }

        if (
            destination.droppableId === "today" &&
            source.droppableId === "overdue"
        ) {
            let task = overdueTasks.find((task) => task._id === draggableId);

            dispatch(updateTask({ ...task, date: Date.now(), order: 0 }));

            return;
        }

        let tasks =
            destination.droppableId === "overdue" ? overdueTasks : todayTasks;
        tasks = reorder(tasks, source.index, destination.index).map(
            (item, index) => {
                return {
                    ...item,
                    order: index,
                };
            }
        );
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
                    <Droppable droppableId={"overdue"}>
                        {(provided) => (
                            <ContentList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{ marginBottom: "30px" }}
                            >
                                {overdueTasks.map((task) => (
                                    <ContentItem
                                        key={task._id}
                                        task={task}
                                        index={task.order}
                                        editingId={editingId}
                                        editRequest={handleEditRequest}
                                    ></ContentItem>
                                ))}
                                {provided.placeholder}
                            </ContentList>
                        )}
                    </Droppable>
                    <SectionHeader>
                        <h2>Today - {moment().format("ddd DD MMM")}</h2>
                    </SectionHeader>
                    <Droppable droppableId={"today"}>
                        {(provided) => (
                            <ContentList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {todayTasks.map((task) => (
                                    <ContentItem
                                        key={task._id}
                                        task={task}
                                        index={task.order}
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
