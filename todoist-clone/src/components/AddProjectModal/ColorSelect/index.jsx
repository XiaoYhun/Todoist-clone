import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemIcon, ItemContent, ColorSelectWrapper } from "./Styles";
import SelectDropdown from "shared/components/SelectDropdown";
import { projectColors } from "shared/utils/styles";
import icons from "shared/utils/icons";

function ColorSelect({ value, children, ...selectProps }) {
    const [defaultValue, setDefaultValue] = useState(projectColors[0].value);
    const selectedValue =
        projectColors.find((item) => item.value === value) ||
        projectColors.find((item) => item.value === defaultValue);
    return (
        <SelectDropdown
            value={value || defaultValue}
            selectList={projectColors.map((item) => {
                return {
                    value: item.value,
                    content: item.name,
                    icon: "dot",
                    iconColor: item.value,
                };
            })}
            isDropdown
            {...selectProps}
        >
            <ColorSelectWrapper>
                <ItemIcon color={selectedValue.value}>{icons["dot"]}</ItemIcon>
                <ItemContent>{selectedValue.name}</ItemContent>
            </ColorSelectWrapper>
        </SelectDropdown>
    );
}

ColorSelect.propTypes = {};

export default ColorSelect;
