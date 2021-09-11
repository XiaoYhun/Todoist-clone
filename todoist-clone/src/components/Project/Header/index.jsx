import React from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, HeaderContent } from "./Styles";

import Button from "shared/components/Button";

function Header({ project }) {
    const isToday = !project;
    return (
        <HeaderWrapper>
            <HeaderContent>
                {isToday ? (
                    <h1>
                        <span>Today</span>
                        <small>Sun 27 Jun</small>
                    </h1>
                ) : (
                    <h1>
                        <span>{project.name}</span>
                    </h1>
                )}
                <div>
                    <Button hasIcon iconType="sort" tooltip="Sort">
                        Sort
                    </Button>
                </div>
            </HeaderContent>
        </HeaderWrapper>
    );
}

Header.propTypes = {};

export default Header;
