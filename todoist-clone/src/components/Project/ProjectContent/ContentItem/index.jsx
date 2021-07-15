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
import { deleteTask } from "slices/tasksSlice";
import AddTaskInline from "../../AddTaskInline";
import { useRouteMatch } from "react-router-dom";
import { priorityColor } from "shared/utils/styles";

function ContentItem({ task, index, editingId, editRequest = () => {} }) {
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();
    const match = useRouteMatch();

    const handleDeleteClick = () => {
        dispatch(deleteTask(task._id));
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
                                    ></ColoredCircleButton>
                                    <ContentLink
                                        to={`${match.url}/task/${task._id}`}
                                    >
                                        <ContentText>{task.text}</ContentText>
                                        <ContentTags>
                                            <Button>
                                                {moment(task.date).format(
                                                    "DD MMM kk:mm"
                                                )}
                                            </Button>
                                            <ProjectLink>Inbox</ProjectLink>
                                        </ContentTags>
                                    </ContentLink>
                                    <ItemActionButtons
                                        onDeleteClick={() =>
                                            handleDeleteClick()
                                        }
                                        onEditClick={() => {
                                            setIsEditing(true);
                                            editRequest(task._id);
                                        }}
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
