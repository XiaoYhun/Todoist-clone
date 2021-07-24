import React, { useState } from "react";
import PropTypes from "prop-types";
import Popper from "shared/components/Popper";
import styled from "styled-components";
import Button from "shared/components/Button";
import icons from "shared/utils/icons";
import { priorityColor } from "shared/utils/styles";
import { useRouteMatch } from "react-router-dom";
import moment from "moment";

const MenuWrapper = styled.ul`
    width: 250px;
    font-size: 13px;
    padding: 5px 0px 4px 0px;
    & li {
        list-style: none;
        padding: 4px 10px;
        text-decoration: none !important;
    }

    & .menu_item_delete:hover {
        color: red;
        & svg {
            color: red;
        }
    }
`;

const IconMenuItem = styled.li`
    display: flex;
    align-items: flex-start;
    line-height: 24px;
    cursor: pointer;
    &:hover {
        background-color: #f3f3f3;
    }

    & .icon_menu {
        color: grey;
        height: 24px;
        width: 24px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .content_menu {
        flex: 1;
    }
`;
const MenuSeparator = styled.li`
    margin: 4px;
    border-bottom: 1px solid #ddd;
    padding: 0px !important;
`;
const SectionMenuItem = styled.li`
    padding: 4px 10px;

    & .section_menu_label {
        font-size: 11px;
        margin-bottom: 11px;
    }

    & .section_menu_content {
        display: flex;
        flex-direction: row;
    }

    & button {
        border-radius: 3px;
        height: 28px;
        width: 28px;
        color: grey;
        margin-right: 13px;
    }

    & .priority_holder button {
        margin-right: 18px !important;
        border: 1px solid transparent;
    }
    & .priority_holder button.selected {
        border-color: #ddd !important;
    }
`;

const priorities = [1, 2, 3, 4];
function TaskContextMenu({
    children,
    onDeleteClick = () => {},
    onEditClick = () => {},
    onScheduleClick = () => {},
    onDuplicateClick = () => {},
    isContextMenu,
    task = {},
    disabled,
    onUpdate = () => {},
}) {
    const [stateIsOpen, setIsOpen] = useState(false);
    const match = useRouteMatch();

    const handlePriorityClick = (priority) => {
        onUpdate({ ...task, priority: priority });
        setIsOpen(false);
    };

    const handleScheduleClick = (day) => {
        onScheduleClick(day);
        setIsOpen(false);
    };
    const handleCopyLinkClick = () => {
        const el = document.createElement("input");
        el.value = `${window.location.origin}/project/task/${task._id}`;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };

    return (
        <Popper
            forceClose={stateIsOpen}
            isOpen={stateIsOpen}
            isContextMenu={isContextMenu}
            onContextMenu={() => setIsOpen(true)}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            renderContent={() => {
                return (
                    <MenuWrapper>
                        {!disabled && (
                            <>
                                <IconMenuItem onClick={onEditClick}>
                                    <div className="icon_menu">
                                        {icons.edit}
                                    </div>
                                    <div className="content_menu">
                                        Edit task
                                    </div>
                                </IconMenuItem>
                                <IconMenuItem>
                                    <div className="icon_menu">
                                        {icons.list}
                                    </div>
                                    <div className="content_menu">
                                        Go to project
                                    </div>
                                </IconMenuItem>
                                <MenuSeparator />
                                <SectionMenuItem>
                                    <div className="section_menu_label">
                                        Schedule
                                    </div>
                                    <div className="schedule_holder section_menu_content">
                                        <Button
                                            hasIcon
                                            iconType={"calendarToday"}
                                            tooltip={"Today"}
                                            style={{ color: "#058527" }}
                                            onClick={() =>
                                                handleScheduleClick(
                                                    moment().valueOf()
                                                )
                                            }
                                        ></Button>
                                        <Button
                                            hasIcon
                                            iconType={"sun"}
                                            tooltip={"Tomorrow"}
                                            style={{ color: "#ad6200" }}
                                            onClick={() =>
                                                handleScheduleClick(
                                                    moment()
                                                        .add(1, "days")
                                                        .valueOf()
                                                )
                                            }
                                        ></Button>
                                        <Button
                                            hasIcon
                                            iconType={"chair"}
                                            tooltip={"This weekend"}
                                            style={{ color: "#246fe0" }}
                                            onClick={() =>
                                                handleScheduleClick(
                                                    moment().day(7).valueOf()
                                                )
                                            }
                                        ></Button>
                                        <Button
                                            hasIcon
                                            iconType={"nextWeek"}
                                            tooltip={"Next Week"}
                                            style={{ color: "#692fc2" }}
                                            onClick={() =>
                                                handleScheduleClick(
                                                    moment().day(8).valueOf()
                                                )
                                            }
                                        ></Button>
                                        <Button
                                            hasIcon
                                            iconType={"noDate"}
                                            tooltip={"No date"}
                                        ></Button>
                                        <Button
                                            hasIcon
                                            iconType={"more"}
                                            tooltip={"More"}
                                        ></Button>
                                    </div>
                                </SectionMenuItem>
                                <SectionMenuItem>
                                    <div className="section_menu_label">
                                        Priority
                                    </div>
                                    <div className="priority_holder section_menu_content">
                                        {priorities.map((item) => (
                                            <Button
                                                key={item}
                                                hasIcon
                                                iconType={
                                                    item < 4
                                                        ? "flagFill"
                                                        : "flag"
                                                }
                                                fillColor={priorityColor[item]}
                                                tooltip={`Priority ${item}`}
                                                className={
                                                    item === task.priority
                                                        ? "selected"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    handlePriorityClick(item)
                                                }
                                            />
                                        ))}
                                    </div>
                                </SectionMenuItem>
                                <MenuSeparator />
                                <IconMenuItem>
                                    <div className="icon_menu">
                                        {icons.clock}
                                    </div>
                                    <div className="content_menu">
                                        Reminders
                                    </div>
                                </IconMenuItem>
                                <MenuSeparator />
                                <IconMenuItem>
                                    <div className="icon_menu">
                                        {icons.moveTo}
                                    </div>
                                    <div className="content_menu">
                                        Move to project
                                    </div>
                                </IconMenuItem>
                                <IconMenuItem
                                    onClick={() => {
                                        setIsOpen(false);
                                        onDuplicateClick(task._id);
                                    }}
                                >
                                    <div className="icon_menu">
                                        {icons.duplicate}
                                    </div>
                                    <div className="content_menu">
                                        Duplicate
                                    </div>
                                </IconMenuItem>
                                <IconMenuItem
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleCopyLinkClick();
                                    }}
                                >
                                    <div className="icon_menu">
                                        {icons.link}
                                    </div>
                                    <div className="content_menu">
                                        Copy link to task
                                    </div>
                                </IconMenuItem>
                                <MenuSeparator />
                            </>
                        )}
                        <IconMenuItem
                            className="menu_item_delete"
                            onClick={onDeleteClick}
                        >
                            <div className="icon_menu">{icons.trash}</div>
                            <div className="content_menu">Delete task</div>
                        </IconMenuItem>
                    </MenuWrapper>
                );
            }}
        >
            {children}
        </Popper>
    );
}

TaskContextMenu.propTypes = {};

export default TaskContextMenu;
