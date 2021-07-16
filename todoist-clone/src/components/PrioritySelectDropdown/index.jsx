import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SelectDropdown from "shared/components/SelectDropdown";
import { priorityColor } from "shared/utils/styles";
function PrioritySelectDropdown({ children, ...selectProps }) {
    const priorityList = [
        {
            icon: "flagFill",
            iconColor: priorityColor[1],
            value: 1,
            content: "Priority 1",
        },
        {
            icon: "flagFill",
            iconColor: priorityColor[2],
            value: 2,
            content: "Priority 2",
        },
        {
            icon: "flagFill",
            iconColor: priorityColor[3],
            value: 3,
            content: "Priority 3",
        },
        { icon: "flag", value: 4, content: "Priority 4" },
    ];
    return (
        <SelectDropdown selectList={priorityList} {...selectProps}>
            {children}
        </SelectDropdown>
    );
}

PrioritySelectDropdown.propTypes = {};

export default PrioritySelectDropdown;
