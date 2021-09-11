import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    ProjectContentWrapper,
    ContentSection,
    SectionHeader,
    SectionHeaderActions,
} from "./Styles";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
    updateTasksOrder,
    saveTasksOrder,
    updateTask,
    getTasksByIds,
} from "slices/tasksSlice";
import moment from "moment";
import ContentList from "shared/components/ContentList";
import AddTaskSection from "components/Project/AddTaskSection";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function ProjectContent({ isToday, todayTasks, overdueTasks, project }) {
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState("");
    const projectTasks = useSelector((state) =>
        project ? getTasksByIds(state, project.tasks) : null
    );
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
                {!isToday ? (
                    <ContentSection>
                        <ContentList
                            droppableId={"project"}
                            tasks={projectTasks}
                        ></ContentList>
                        <AddTaskSection project={project}></AddTaskSection>
                    </ContentSection>
                ) : (
                    <ContentSection>
                        {overdueTasks && (
                            <>
                                <SectionHeader>
                                    <h2>Overdue</h2>
                                    <SectionHeaderActions>
                                        Reschedule
                                    </SectionHeaderActions>
                                </SectionHeader>

                                <ContentList
                                    droppableId={"overdue"}
                                    tasks={overdueTasks}
                                ></ContentList>
                            </>
                        )}

                        <SectionHeader style={{ marginTop: "20px" }}>
                            <h2>Today - {moment().format("ddd DD MMM")}</h2>
                        </SectionHeader>
                        <ContentList droppableId={"today"} tasks={todayTasks}>
                            <AddTaskSection></AddTaskSection>
                        </ContentList>
                    </ContentSection>
                )}
            </ProjectContentWrapper>
        </DragDropContext>
    );
}

ProjectContent.propTypes = {};

export default ProjectContent;
