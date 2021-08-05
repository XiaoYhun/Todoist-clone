import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
    LeftMenuWrapper,
    TopFilters,
    Filter,
    FilterIcon,
    FilterName,
} from "./Styles";
import ExpansionPanel from "./ExpansionPanel";
import { projects } from "shared/utils/datadump";
import icons from "shared/utils/icons";
import { projectsSelectors } from "slices/projectsSlice";
function LeftMenu(props) {
    const projects = useSelector(projectsSelectors.selectAll);
    return (
        <LeftMenuWrapper>
            <TopFilters>
                <Filter>
                    <FilterIcon color={"#246fe0"}>{icons.big_inbox}</FilterIcon>
                    <FilterName>
                        Inbox<small>30</small>
                    </FilterName>
                </Filter>
                <Filter>
                    <FilterIcon color={"#058527"}>{icons.today}</FilterIcon>
                    <FilterName>
                        Today<small>30</small>
                    </FilterName>
                </Filter>
                <Filter>
                    <FilterIcon color={"#692fc2"}>{icons.upcoming}</FilterIcon>
                    <FilterName>
                        Upcoming<small>30</small>
                    </FilterName>
                </Filter>
            </TopFilters>
            <ExpansionPanel
                title="Favorites"
                projects={projects}
            ></ExpansionPanel>
            <ExpansionPanel
                title="Projects"
                projects={projects}
                addButton
            ></ExpansionPanel>
        </LeftMenuWrapper>
    );
}

LeftMenu.propTypes = {};

export default LeftMenu;
