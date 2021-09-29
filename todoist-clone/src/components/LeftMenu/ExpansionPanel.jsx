import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icons from "shared/utils/icons";
import AddProjectModal from "components/AddProjectModal";
import Button from "shared/components/Button";
import { Link, useRouteMatch } from "react-router-dom";
import ProjectContextMenu from "./ProjectContextMenu";
const ExpandButton = styled(Button)`
    &:hover {
        background: transparent;
    }
    svg {
        width: 38px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        ${(props) => !props.expanded && "transform: rotate(-90deg)"}
    }
`;
const AddButton = styled(Button)`
    opacity: 0;
    height: 24px;
    width: 24px;
    margin: 0 12px 0 10px;

    svg {
        color: #202020;
        height: 18px;
        width: 18px;
    }
`;

const ExpansionPanelWrapper = styled.div`
    margin-top: 12px;
    &:hover ${AddButton} {
        opacity: 1;
    }
`;

const Header = styled.div`
    min-height: 40px;
    display: flex;
    align-items: center;
    color: #333;
    cursor: pointer;

    button {
        border: none;
        background: none;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 14px;
    flex: 1;
`;
const ProjectLink = styled(Link)``;

const CollapseWrapper = styled.div`
    min-height: 0px;
    max-height: ${(props) => (props.expanded ? "500px" : "0")};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-right: 5px;

    ${ProjectLink} {
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: 100%;
        flex: 1;
        cursor: pointer;
        transition-duration: 220ms;
        padding: 5px 12px 5px 7px;
        margin-right: 5px;
        box-sizing: border-box;
        &:hover {
            background-color: #e9e9e9;
        }
        & span.projectName {
            line-height: 17px;
            font-size: 14px;
            color: #202020;

            padding: 3px 0 3px 7px;
        }
    }
`;

const ColoredDot = styled(({ className }) => (
    <span className={className}>{icons.dot}</span>
))`
    display: flex;
    justify-content: center;
    width: 30px;
    height: 24px;
    color: ${(props) => (props.color ? props.color : "#808080")};
    content: ${icons.dot};
`;

function ExpansionPanel({ title, projects, addButton }) {
    const [expanded, setExpanded] = useState(false);
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    const [projectEdit, setProject] = useState(null);
    const handleExpandClick = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };
    const handleAddClick = (e) => {
        e.preventDefault();
        setIsOpenAddModal((isOpenAddModal) => !isOpenAddModal);
    };
    const handleEditClick = (project) => {
        setProject((p) => project);
        setIsOpenAddModal((isOpenAddModal) => !isOpenAddModal);
    };
    return (
        <ExpansionPanelWrapper>
            <Header>
                <ExpandButton
                    hasIcon
                    iconType="toggle"
                    expanded={expanded}
                    onClick={handleExpandClick}
                ></ExpandButton>
                <Title onClick={handleExpandClick}>{title}</Title>
                {addButton && (
                    <>
                        <AddButton
                            hasIcon
                            iconType="add"
                            iconColor="grey"
                            onClick={handleAddClick}
                        />
                        <AddProjectModal
                            isOpen={isOpenAddModal}
                            onClose={() => {
                                setIsOpenAddModal(false);
                                setProject(null);
                            }}
                            project={projectEdit}
                        ></AddProjectModal>
                    </>
                )}
            </Header>
            <CollapseWrapper expanded={expanded}>
                {projects &&
                    projects.map((project, index) => (
                        <ProjectContextMenu
                            project={project}
                            isContextMenu
                            onEditClick={() => handleEditClick(project)}
                            onFavoritesClick={() => {}}
                            onDeleteClick={() => {}}
                        >
                            <ProjectLink to={`/project/${project._id}`}>
                                <ColoredDot color={project.color}></ColoredDot>
                                <span className="projectName">
                                    {project.name}
                                </span>
                            </ProjectLink>
                        </ProjectContextMenu>
                    ))}
            </CollapseWrapper>
        </ExpansionPanelWrapper>
    );
}

ExpansionPanel.propTypes = { title: PropTypes.string };

export default ExpansionPanel;
