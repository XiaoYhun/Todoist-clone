import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icons from "shared/utils/icons";
const ExpansionPanelWrapper = styled.div`
    margin-top: 12px;
`;
const Header = styled.div`
    min-height: 40px;
    display: flex;
    align-items: center;
    color: #333;
    cursor: pointer;
    & button {
        border: none;
        background: none;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
    }
    & svg {
        width: 38px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        ${(props) => !props.expanded && "transform: rotate(-90deg)"}
    }
`;
const CollapseWrapper = styled.div`
    min-height: 0px;
    max-height: ${(props) => (props.expanded ? "500px" : "0")};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: flex;
    overflow: hidden;

    & ul {
        padding: 0;
        margin: 0;
        flex: 1;
    }

    & ul li {
        list-style: none;
        display: flex;
    }

    & ul li > div {
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: 100%;
        flex: 1;
        cursor: pointer;
        transition-duration: 220ms;
        padding: 5px 12px 5px 7px;
        margin-right: 5px;

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

function ExpansionPanel({ title, projects }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };
    return (
        <ExpansionPanelWrapper>
            <Header expanded={expanded}>
                <button onClick={handleClick}>
                    {icons.toggle}
                    {title}
                </button>
            </Header>
            <CollapseWrapper expanded={expanded}>
                <ul>
                    {projects &&
                        projects.map((project, index) => (
                            <li key={index}>
                                <div>
                                    <ColoredDot color={"#4073FF"}></ColoredDot>
                                    <span className="projectName">
                                        {project.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                </ul>
            </CollapseWrapper>
        </ExpansionPanelWrapper>
    );
}

ExpansionPanel.propTypes = { title: PropTypes.string };

export default ExpansionPanel;
