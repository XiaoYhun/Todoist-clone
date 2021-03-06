import React from "react";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import styled, { css } from "styled-components";
import TaskContextMenu from "components/Project/TaskContextMenu";
import SchedulePopper from "components/SchedulePopper";
const ActionButton = styled(Button)`
    width: 24px;
    height: 24px;
    margin-left: 8px;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.disabled &&
        css`
            & {
                opacity: 0.3;
            }
        `}
`;
export const ActionButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 24px;
    margin-right: 3px;
    margin-top: 8px;
    padding-left: 16px;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
function ItemActionButtons({
    onDeleteClick,
    onEditClick,
    task,
    onUpdate,
    onDuplicateClick,
    onProjectClick,
}) {
    const handleDayClick = (timestamp) => {
        onUpdate({ ...task, date: timestamp });
    };

    return (
        <ActionButtonsWrapper>
            <ActionButton
                hasIcon
                iconType="edit"
                tooltip="Edit"
                onClick={onEditClick}
                disabled={task.done}
            />
            <SchedulePopper
                onDayClick={handleDayClick}
                selectedDay={+task.date}
            >
                <ActionButton
                    hasIcon
                    iconType="schedule"
                    tooltip="Schedule"
                    disabled={task.done}
                />
            </SchedulePopper>
            <ActionButton
                hasIcon
                iconType="comment"
                tooltip="Comment"
                disabled={task.done}
            />
            <TaskContextMenu
                onDeleteClick={onDeleteClick}
                task={task}
                onUpdate={onUpdate}
                disabled={task.done}
                onEditClick={onEditClick}
                onScheduleClick={handleDayClick}
                onDuplicateClick={onDuplicateClick}
                onProjectClick={onProjectClick}
            >
                <ActionButton hasIcon iconType="more" tooltip="More" />
            </TaskContextMenu>
        </ActionButtonsWrapper>
    );
}

ItemActionButtons.propTypes = {};

export default ItemActionButtons;
