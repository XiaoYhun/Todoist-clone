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
import { useSelector } from "react-redux";
import TaskTabs from "./TaskTabs";
import Modal from "shared/components/Modal";
import icons from "shared/utils/icons";
import { tasksSelectors } from "slices/tasksSlice";
import moment from "moment";
import AddTaskInline from "../Project/AddTaskInline";
import { priorityColor } from "shared/utils/styles";
function TaskDetailModal({ isOpen, onClose = () => {}, taskId }) {
    const [isEditing, setIsEditing] = useState(false);

    const task = useSelector((state) =>
        tasksSelectors.selectById(state, taskId)
    );
    return (
        <Modal isOpen={isOpen} onClose={onClose} isGrow>
            <TaskDetailModalWrapper>
                <DetailHeader>
                    <ProjectLink>
                        <ProjectIcon>{icons.inbox}</ProjectIcon>
                        <ProjectName>Inbox</ProjectName>
                    </ProjectLink>
                </DetailHeader>
                {isEditing ? (
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
                        ></CircleButton>
                        <TaskOverviewMain>
                            <TaskOverviewHeader
                                onClick={() => setIsEditing(true)}
                            >
                                {task && task.text}
                            </TaskOverviewHeader>

                            <TaskOverviewSub>
                                <DateDueButton hasIcon iconType="calendar">
                                    {task &&
                                        moment(task.date).format(
                                            "DD MMM kk:mm"
                                        )}
                                </DateDueButton>
                            </TaskOverviewSub>
                            <TaskOverviewFooter>
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
                                <ActionButton
                                    hasIcon
                                    tooltip="Set priority"
                                    iconType={
                                        task && task.priority
                                            ? "flagFill"
                                            : "flag"
                                    }
                                    fillColor={
                                        task && priorityColor[task.priority]
                                    }
                                ></ActionButton>
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
                <TaskTabs>123</TaskTabs>
            </TaskDetailModalWrapper>
        </Modal>
    );
}

TaskDetailModal.propTypes = {};

export default TaskDetailModal;
