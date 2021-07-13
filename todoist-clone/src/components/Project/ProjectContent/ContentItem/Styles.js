import styled, { css } from "styled-components";
import { ActionButtonsWrapper } from "./ItemActionButtons";
import Button from "shared/components/Button";
import { Link } from "react-router-dom";

export const DragContainer = styled.div``;
export const DragButton = styled(Button)`
    opacity: 0;
    position: absolute;
    top: 7px;
    left: -27px;
    width: 27px;
    padding-right: 3px;
    display: flex;
    flex-wrap: nowrap;
    cursor: move;
`;
export const ContentItemWrapper = styled.li`
    list-style: none;
    min-height: 55px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    padding-left: 2px;
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: white;
    transition: box-shadow 0.2s ease;
    ${(props) =>
        props.isDragging &&
        css`
            transform: rotate(1deg) !important;
            box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.28);
        `}

    &:hover ${ActionButtonsWrapper}, &:hover ${DragButton} {
        opacity: 1;
    }
`;

export const ContentLink = styled(Link)`
    flex: 1;
    padding: 8px 0;
    margin-right: 30px;
`;
export const ContentText = styled.div`
    display: flex;
    margin-bottom: 3px;
    width: 100%;
    text-align: left;
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
    word-wrap: break-word;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: 202020;
`;
export const ContentTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 16px;
    justify-content: space-between;
`;

export const ProjectLink = styled.span`
    height: 16px;
    display: flex;
    margin-left: auto;
    margin-right: -15px;
    font-size: 12px;
    color: grey;

    &:hover {
        color: black;
    }
`;
