import styled from "styled-components";

export const SelectDropdownWrapper = styled.ul`
    width: 275px;
`;
export const DropdownItem = styled.li`
    line-height: 24px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover,
    &.selected {
        background-color: #f3f3f3;
    }

    &.selected:hover {
        background-color: #ccc;
    }
`;
export const ItemIcon = styled.div`
    height: 24px;
    width: 24px;

    & svg path {
        ${(props) => props.color && `fill: ${props.color}`}
    }
`;
export const ItemContent = styled.div`
    flex: 1;
    font-size: 13px;
    margin: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 24px;
`;

export const ItemCheckMark = styled.span`
    color: #dd4b39;

    & svg {
        width: 14px;
        height: 14px;
    }
`;
