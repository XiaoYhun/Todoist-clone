import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    ProjectContextMenuWrapper,
    IconMenuItem,
    MenuSeparator,
} from "./Styles";
import Popper from "shared/components/Popper";
import icons from "shared/utils/icons";
function ProjectContextMenu({
    children,
    onEditClick = () => {},
    onFavoritesClick = () => {},
    onDeleteClick = () => {},
    isContextMenu,
    project,
}) {
    const [stateIsOpen, setIsOpen] = useState(false);

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
                    <ProjectContextMenuWrapper>
                        <IconMenuItem
                            onClick={() => {
                                setIsOpen(false);
                                onEditClick();
                            }}
                        >
                            <div className="icon_menu">{icons.edit}</div>
                            <div className="content_menu">Edit project</div>
                        </IconMenuItem>
                        <IconMenuItem
                            onClick={() => {
                                setIsOpen(false);
                                onFavoritesClick();
                            }}
                        >
                            <div className="icon_menu">{icons.heart}</div>
                            <div className="content_menu">Add to favorites</div>
                        </IconMenuItem>
                        <MenuSeparator />
                        <IconMenuItem
                            onClick={() => {
                                setIsOpen(false);
                                onDeleteClick();
                            }}
                        >
                            <div className="icon_menu">{icons.trash}</div>
                            <div className="content_menu">Delete project</div>
                        </IconMenuItem>
                    </ProjectContextMenuWrapper>
                );
            }}
        >
            {children}
        </Popper>
    );
}

ProjectContextMenu.propTypes = {};

export default ProjectContextMenu;
