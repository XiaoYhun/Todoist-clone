import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ContentList from "shared/components/ContentList";
import { DragDropContext } from "react-beautiful-dnd";
import AddTaskSection from "components/Project/AddTaskSection";
import { getTasksByIds } from "slices/tasksSlice";

const TaskTabsWrapper = styled.div`
    flex-grow: 0;
`;
const TabList = styled.div`
    display: flex;
    align-items: center;
`;
const TaskTab = styled.div`
    flex: 1;
    text-align: center;
    color: grey;
    border-bottom: 1px solid #e0e0e0;
    padding: 9px 0;
    font-size: 13px;
    transition-property: border-color, color, font-weight;
    transition: 0.1s cubic-bezier(0.4, 0, 1, 1);
    -webkit-user-select: none;
    user-select: none;
    &:hover {
        color: #414141;
    }

    ${(props) =>
        props.selected &&
        css`
            font-weight: 700;
            color: #000;
            border-color: #000;
        `}
    cursor: pointer;
`;
const TabBody = styled.div``;
const SubtaskTab = styled.div`
    padding: 20px 30px 0;
`;

const tabs = [
    {
        title: "Sub-tasks",
        id: "subtask",
    },
    {
        title: "Comments",
        id: "comments",
    },
    {
        title: "Activity",
        id: "activity",
    },
];
function TaskTabs({ task = {} }) {
    const [selectedTab, setSelectedTab] = useState("subtask");
    const subTasks = useSelector((state) =>
        getTasksByIds(state, task.children)
    );
    const tabClickHandle = (e) => {
        e.preventDefault();
        setSelectedTab(e.target.id);
    };
    const handleDragEnd = () => {};
    return (
        <TaskTabsWrapper>
            <TabList>
                {tabs.map((tab) => (
                    <TaskTab
                        id={tab.id}
                        key={tab.id}
                        selected={selectedTab === tab.id}
                        onClick={tabClickHandle}
                    >
                        {tab.title}
                    </TaskTab>
                ))}
            </TabList>
            <TabBody>
                {selectedTab === "subtask" && (
                    <SubtaskTab>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <ContentList
                                tasks={subTasks}
                                droppableId="subtask"
                            ></ContentList>
                            <AddTaskSection
                                placeHolder={"Add sub-task"}
                                parentId={task._id}
                            />
                        </DragDropContext>
                    </SubtaskTab>
                )}
            </TabBody>
        </TaskTabsWrapper>
    );
}

TaskTabs.propTypes = {};

export default TaskTabs;
