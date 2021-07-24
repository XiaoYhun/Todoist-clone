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
} from "./Styles";
import ColoredCircleButton from "./ColoredCircleButton";
import Button from "shared/components/Button";
import ItemActionButtons from "./ItemActionButtons";
import { Draggable } from "react-beautiful-dnd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "slices/tasksSlice";
import AddTaskInline from "../../AddTaskInline";
import { useRouteMatch } from "react-router-dom";
import { priorityColor } from "shared/utils/styles";
import icons from "shared/utils/icons";
import SchedulePopper from "components/SchedulePopper";
import TaskContextMenu from "./../../TaskContextMenu/index";
import { formatDate } from "shared/utils/dateTime";
function ContentItem({ task, index, editingId, editRequest = () => {} }) {
    const [isEditing, setIsEditing] = useState(false);

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

    return (
        <>
            {isEditing && editingId === task._id ? (
                <AddTaskInline
                    isEdit={true}
                    task={task}
                    onCancel={() => setIsEditing(false)}
                    onSave={() => setIsEditing(false)}
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
                                            onDeleteClick={() =>
                                                handleDeleteClick()
                                            }
                                            onUpdate={handleUpdateTask}
                                            onEditClick={handleEditClick}
                                            onScheduleClick={handleDayClick}
                                            onDuplicateClick={
                                                handleDuplicateClick
                                            }
                                            task={task}
                                            disabled={task.done}
                                        >
                                            <>
                                                <ContentText
                                                    to={`${match.url}/task/${task._id}`}
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
                                                            <span>
                                                                {
                                                                    icons.calendarSmall
                                                                }
                                                                {formatDate(
                                                                    +task.date
                                                                )}
                                                            </span>
                                                        </Button>
                                                    </SchedulePopper>
                                                    <ProjectLink>
                                                        Inbox
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
