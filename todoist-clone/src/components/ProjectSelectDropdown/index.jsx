import React from "react";
import PropTypes from "prop-types";
import { ProjectSelectDropdownWrapper } from "./Styles";
import SelectDropdown from "shared/components/SelectDropdown";
import { useSelector } from "react-redux";
import { projectsSelectors } from "slices/projectsSlice";

function ProjectSelectDropdown({ children, ...selectProps }) {
    const projectList = useSelector(projectsSelectors.selectAll);
    return (
        <SelectDropdown
            selectList={projectList.map((project) => {
                return {
                    icon: "dot",
                    iconColor: project.color || "grey",
                    value: project._id,
                    content: project.name,
                };
            })}
            hasFilterInput
            isDropdown
            {...selectProps}
        >
            {children}
        </SelectDropdown>
    );
}

ProjectSelectDropdown.propTypes = {};

export default ProjectSelectDropdown;
