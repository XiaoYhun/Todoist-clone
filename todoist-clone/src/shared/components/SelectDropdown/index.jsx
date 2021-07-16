import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    SelectDropdownWrapper,
    DropdownItem,
    ItemIcon,
    ItemContent,
    ItemCheckMark,
} from "./Styles";
import Popper from "../Popper";
import icons from "shared/utils/icons";
function SelectDropdown({
    children,
    value: selectedValue = undefined,
    selectList = [],
    onChange = () => {},
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Popper
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            renderContent={() => (
                <SelectDropdownWrapper>
                    {selectList.map((item) => (
                        <DropdownItem
                            key={item.value}
                            onClick={() => {
                                if (item.value !== selectedValue) {
                                    onChange(item.value);
                                }
                                setIsOpen(false);
                            }}
                            className={
                                selectedValue === item.value && "selected"
                            }
                        >
                            {item.icon && (
                                <ItemIcon color={item.iconColor}>
                                    {icons[item.icon]}
                                </ItemIcon>
                            )}
                            <ItemContent>{item.content}</ItemContent>
                            {selectedValue === item.value && (
                                <ItemCheckMark>{icons.checkMark}</ItemCheckMark>
                            )}
                        </DropdownItem>
                    ))}
                </SelectDropdownWrapper>
            )}
        >
            {React.cloneElement(children, {
                onClick: () => setIsOpen(true),
            })}
        </Popper>
    );
}

SelectDropdown.propTypes = {};

export default SelectDropdown;
