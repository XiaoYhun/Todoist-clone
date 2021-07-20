import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

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
function TaskTabs(props) {
    const [selectedTask, setSelectedTask] = useState("subtask");

    const tabClickHandle = (e) => {
        e.preventDefault();
        setSelectedTask(e.target.id);
    };
    return (
        <TaskTabsWrapper>
            <TabList>
                {tabs.map((tab) => (
                    <TaskTab
                        id={tab.id}
                        key={tab.id}
                        selected={selectedTask === tab.id}
                        onClick={tabClickHandle}
                    >
                        {tab.title}
                    </TaskTab>
                ))}
            </TabList>
        </TaskTabsWrapper>
    );
}

TaskTabs.propTypes = {};

export default TaskTabs;
