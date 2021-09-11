import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    TaskDetailModalWrapper,
    DetailHeader,
    ProjectLink,
    ProjectIcon,
    ProjectName,
    TaskOverview,
    CircleButton,
    TaskOverviewMain,
    TaskOverviewHeader,
    TaskOverviewSub,
    TaskOverviewFooter,
    DateDueButton,
    ActionButton,
} from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import TaskTabs from "./TaskTabs";
import Modal from "shared/components/Modal";
import icons from "shared/utils/icons";
import { tasksSelectors } from "slices/tasksSlice";
import { projectsSelectors } from "slices/projectsSlice";
import moment from "moment";
import AddTaskInline from "../Project/AddTaskInline";
import { priorityColor } from "shared/utils/styles";
import PrioritySelectDropdown from "../PrioritySelectDropdown";
import { updateTask } from "slices/tasksSlice";
import SchedulePopper from "./../SchedulePopper/index";
function TaskDetailModal({ isOpen, onClose = () => {}, taskId }) {
    const [isEditing, setIsEditing] = useState(false);
    const task = useSelector((state) =>
        tasksSelectors.selectById(state, taskId)
    );
    const project = useSelector(
        (state) => task && projectsSelectors.selectById(state, task.project)
    );
    const dispatch = useDispatch();
    const isDone = task && task.done;
    const handleUpdateTask = (newTask) => {
        dispatch(updateTask(newTask));
    };

    const handlePriorityChange = (value) => {
        handleUpdateTask({ ...task, priority: value });
    };

    const handleUpdateDate = (date) => {
        handleUpdateTask({ ...task, date: date });
    };

    const handleDoneClick = () => {
        handleUpdateTask({ ...task, done: !task.done });
    };
    return task ? (
        <Modal isOpen={isOpen} onClose={onClose} isGrow>
            <TaskDetailModalWrapper>
                <DetailHeader>
                    <ProjectLink to={`/project/${task.project}`}>
                        <ProjectIcon color={project ? project.color : null}>
                            {project ? icons.dot : icons.inbox}
                        </ProjectIcon>
                        <ProjectName>
                            {project ? project.name : "Inbox"}
                        </ProjectName>
                    </ProjectLink>
                </DetailHeader>
                {isEditing && !isDone ? (
                    <AddTaskInline
                        isEdit
                        onSave={(text) => setIsEditing(false)}
                        onCancel={() => setIsEditing(false)}
                        task={task}
                    />
                ) : (
                    <TaskOverview>
                        <CircleButton
                            hasIcon
                            iconType="circle"
                            color={
                                task &&
                                task.priority &&
                                priorityColor[task.priority]
                            }
                            className={task.done && "done"}
                            onClick={handleDoneClick}
                        ></CircleButton>
                        <TaskOverviewMain>
                            <TaskOverviewHeader
                                onClick={() => setIsEditing(true)}
                                className={isDone && "done"}
                            >
                                {task && task.text}
                            </TaskOverviewHeader>

                            <TaskOverviewSub>
                                <SchedulePopper
                                    selectedDay={+task.date}
                                    onDayClick={handleUpdateDate}
                                    disabled={isDone}
                                >
                                    <DateDueButton hasIcon iconType="calendar">
                                        {task && task.date
                                            ? moment(+task.date).format(
                                                  "DD MMM"
                                              )
                                            : "Schedule"}
                                    </DateDueButton>
                                </SchedulePopper>
                            </TaskOverviewSub>
                            <TaskOverviewFooter
                                className={isDone && "disabled"}
                            >
                                <ActionButton
                                    hasIcon
                                    iconType="list"
                                    tooltip="Select a project"
                                ></ActionButton>
                                <ActionButton
                                    hasIcon
                                    iconType="tag"
                                    tooltip="Add label(s)"
                                ></ActionButton>
                                <PrioritySelectDropdown
                                    value={task.priority}
                                    onChange={handlePriorityChange}
                                >
                                    <ActionButton
                                        hasIcon
                                        tooltip="Set priority"
                                        iconType={
                                            task &&
                                            task.priority >= 1 &&
                                            task.priority < 4
                                                ? "flagFill"
                                                : "flag"
                                        }
                                        fillColor={
                                            task && priorityColor[task.priority]
                                        }
                                    />
                                </PrioritySelectDropdown>

                                <ActionButton
                                    hasIcon
                                    iconType="clock"
                                    tooltip="Add reminder(s)"
                                ></ActionButton>
                                <ActionButton
                                    hasIcon
                                    iconType="more"
                                    tooltip="More"
                                ></ActionButton>
                            </TaskOverviewFooter>
                        </TaskOverviewMain>
                    </TaskOverview>
                )}
                <TaskTabs task={task}></TaskTabs>
            </TaskDetailModalWrapper>
        </Modal>
    ) : (
        <></>
    );
}

TaskDetailModal.propTypes = {};

export default TaskDetailModal;
