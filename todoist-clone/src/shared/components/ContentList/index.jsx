import React, { useState } from "react";
import PropTypes from "prop-types";
import { ContentListWrapper } from "./Styles";
import ContentItem from "./ContentItem";
import { Droppable } from "react-beautiful-dnd";

function ContentList({ tasks, droppableId }) {
    const [editingId, setEditingId] = useState("");

    const handleEditRequest = (id) => {
        setEditingId(id);
    };
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <ContentListWrapper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {tasks &&
                        tasks.map((task) => (
                            <ContentItem
                                key={task._id}
                                task={task}
                                index={task.order}
                                editingId={editingId}
                                editRequest={handleEditRequest}
                            ></ContentItem>
                        ))}
                    {provided.placeholder}
                </ContentListWrapper>
            )}
        </Droppable>
    );
}

ContentList.propTypes = {};

export default ContentList;
