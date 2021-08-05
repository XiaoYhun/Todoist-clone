import styled from "styled-components";
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

export const ColorSelectWrapper = styled.div`
    display: flex;
    outline: none;
    padding: 3px 6px !important;
    cursor: pointer;
    height: 25px;
    user-select: none;
`;
