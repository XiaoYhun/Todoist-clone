import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
    SelectDropdownWrapper,
    DropdownItem,
    ItemIcon,
    ItemContent,
    ItemCheckMark,
    FilterInput,
    ListWrapper,
} from "./Styles";
import Popper from "../Popper";
import icons from "shared/utils/icons";
function SelectDropdown({
    children,
    value: selectedValue = undefined,
    selectList: selectListProps = [],
    onChange = () => {},
    isDropdown,
    hasFilterInput,
    filterInputPlaceholder = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const filteredList = useMemo(
        () =>
            selectListProps.filter((item) =>
                item.content.includes(filterValue)
            ),
        [filterValue, selectListProps]
    );
    const selectList = hasFilterInput ? filteredList : selectListProps;
    return (
        <Popper
            isOpen={isOpen}
            isDropdown={isDropdown}
            onOpen={() => {
                setIsOpen(true);
            }}
            onClose={() => setIsOpen(false)}
            renderContent={() => (
                <SelectDropdownWrapper>
                    {hasFilterInput && (
                        <FilterInput>
                            <input
                                type="text"
                                placeholder={filterInputPlaceholder}
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                            />
                        </FilterInput>
                    )}
                    <ListWrapper>
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
                                    <ItemCheckMark>
                                        {icons.checkMark}
                                    </ItemCheckMark>
                                )}
                            </DropdownItem>
                        ))}
                    </ListWrapper>
                </SelectDropdownWrapper>
            )}
        >
            {React.isValidElement(children) &&
                React.cloneElement(children, {
                    onClick: () => setIsOpen(true),
                })}
        </Popper>
    );
}

SelectDropdown.propTypes = {};

export default SelectDropdown;
