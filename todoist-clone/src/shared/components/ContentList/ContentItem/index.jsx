import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    ContentItemWrapper,
    ContentLink,
    ContentText,
    ContentTags,
    DragButton,
    ProjectLink,
    DragContainer,
    ProjectIcon,
} from "./Styles";
import ColoredCircleButton from "./ColoredCircleButton";
import Button from "shared/components/Button";
import ItemActionButtons from "./ItemActionButtons";
import { Draggable } from "react-beautiful-dnd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "slices/tasksSlice";
import AddTaskInline from "components/Project/AddTaskInline";
import { useRouteMatch } from "react-router-dom";
import { priorityColor } from "shared/utils/styles";
import icons from "shared/utils/icons";
import SchedulePopper from "components/SchedulePopper";
import TaskContextMenu from "components/Project/TaskContextMenu";
import { formatDate } from "shared/utils/dateTime";
import { projectsSelectors } from "slices/projectsSlice";
function ContentItem({ task, index, editingId, editRequest = () => {} }) {
    const [isEditing, setIsEditing] = useState(false);
    const project = useSelector((state) =>
        projectsSelectors.selectById(state, task.project)
    );
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const handleDeleteClick = () => {
        dispatch(deleteTask(task._id));
    };

    const handleUpdateTask = (task) => {
        dispatch(updateTask(task));
    };

    const isOverdue = () => {
        if (moment().diff(moment(+task.date), "days") > 0) {
            return true;
        }
        return false;
    };
    const handleDayClick = (timestamp) => {
        handleUpdateTask({ ...task, date: timestamp });
    };

    const handleDoneClick = () => {
        handleUpdateTask({ ...task, done: !task.done });
    };
    const handleEditClick = () => {
        setIsEditing(true);
        editRequest(task._id);
    };
    const handleDuplicateClick = () => {
        dispatch(addTask({ ...task, _id: undefined }));
    };
    const handleProjectClick = (value) => {
        handleUpdateTask({ ...task, project: value });
    };

    return (
        <>
            {isEditing && editingId === task._id ? (
                <AddTaskInline
                    isEdit={true}
                    task={task}
                    onCancel={() => setIsEditing(false)}
                    onSave={() => setIsEditing(false)}
                    project={project}
                />
            ) : (
                <Draggable draggableId={task._id} index={index}>
                    {(provided, snapshot) => {
                        return (
                            <DragContainer
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                            >
                                <ContentItemWrapper
                                    isDragging={
                                        snapshot.isDragging &&
                                        !snapshot.isDropAnimating
                                    }
                                    className={task.done && "done"}
                                >
                                    <DragButton
                                        hasIcon
                                        iconType="dragHandle"
                                        {...provided.dragHandleProps}
                                    ></DragButton>
                                    <ColoredCircleButton
                                        color={
                                            task.priority &&
                                            priorityColor[task.priority]
                                        }
                                        onClick={handleDoneClick}
                                        done={task.done}
                                    />
                                    <ContentLink>
                                        <TaskContextMenu
                                            isContextMenu
                                            onDeleteClick={handleDeleteClick}
                                            onUpdate={handleUpdateTask}
                                            onEditClick={handleEditClick}
                                            onScheduleClick={handleDayClick}
                                            onDuplicateClick={
                                                handleDuplicateClick
                                            }
                                            onProjectClick={handleProjectClick}
                                            task={task}
                                            disabled={task.done}
                                        >
                                            <>
                                                <ContentText
                                                    to={`${
                                                        match.url.split(
                                                            "/task/"
                                                        )[0]
                                                    }/task/${task._id}`}
                                                >
                                                    {task.text}
                                                </ContentText>
                                                <ContentTags>
                                                    <SchedulePopper
                                                        selectedDay={+task.date}
                                                        onDayClick={
                                                            handleDayClick
                                                        }
                                                    >
                                                        <Button
                                                            className={
                                                                isOverdue()
                                                                    ? "overdue"
                                                                    : ""
                                                            }
                                                        >
                                                            {task.date !==
                                                                null && (
                                                                <span>
                                                                    {
                                                                        icons.calendarSmall
                                                                    }
                                                                    {formatDate(
                                                                        +task.date
                                                                    )}
                                                                </span>
                                                            )}
                                                        </Button>
                                                    </SchedulePopper>
                                                    <ProjectLink>
                                                        {project
                                                            ? project.name
                                                            : "Inbox"}
                                                        <ProjectIcon
                                                            color={
                                                                project
                                                                    ? project.color
                                                                    : "cornflowerblue"
                                                            }
                                                        >
                                                            {project
                                                                ? icons.dot
                                                                : icons.inbox}
                                                        </ProjectIcon>
                                                    </ProjectLink>
                                                </ContentTags>
                                            </>
                                        </TaskContextMenu>
                                    </ContentLink>
                                    <ItemActionButtons
                                        onDeleteClick={() =>
                                            handleDeleteClick()
                                        }
                                        onEditClick={handleEditClick}
                                        onUpdate={handleUpdateTask}
                                        onDuplicateClick={handleDuplicateClick}
                                        onProjectClick={handleProjectClick}
                                        task={task}
                                    ></ItemActionButtons>
                                </ContentItemWrapper>
                            </DragContainer>
                        );
                    }}
                </Draggable>
            )}
        </>
    );
}

ContentItem.propTypes = {};

export default ContentItem;
