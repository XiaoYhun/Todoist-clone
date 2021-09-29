import styled from "styled-components";

export const ProjectContextMenuWrapper = styled.div`
    width: 250px;
    font-size: 13px;
    padding: 5px 0px 4px 0px;
    & li {
        list-style: none;
        padding: 4px 10px;
        text-decoration: none !important;
    }

    & .menu_item_delete:hover {
        color: red;
        & svg {
            color: red;
        }
    }
`;
export const MenuWrapper = styled.ul`
    width: 250px;
    font-size: 13px;
    padding: 5px 0px 4px 0px;
    & li {
        list-style: none;
        padding: 4px 10px;
        text-decoration: none !important;
    }

    & .menu_item_delete:hover {
        color: red;
        & svg {
            color: red;
        }
    }
`;

export const IconMenuItem = styled.li`
    display: flex;
    align-items: flex-start;
    line-height: 24px;
    cursor: pointer;
    &:hover {
        background-color: #f3f3f3;
    }

    & .icon_menu {
        color: grey;
        height: 24px;
        width: 24px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .content_menu {
        flex: 1;
    }
`;
export const MenuSeparator = styled.li`
    margin: 4px;
    border-bottom: 1px solid #ddd;
    padding: 0px !important;
`;
export const SectionMenuItem = styled.li`
    padding: 4px 10px;

    & .section_menu_label {
        font-size: 11px;
        margin-bottom: 11px;
    }

    & .section_menu_content {
        display: flex;
        flex-direction: row;
    }

    & button {
        border-radius: 3px;
        height: 28px;
        width: 28px;
        color: grey;
        margin-right: 13px;
    }

    & .priority_holder button {
        margin-right: 18px !important;
        border: 1px solid transparent;
    }
    & .priority_holder button.selected {
        border-color: #ddd !important;
    }
`;
