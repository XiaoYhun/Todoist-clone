import styled from "styled-components";

export const InfiniteScrollWrapper = styled.div`
    background: white;
    max-height: 180px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-right: -17px;
    padding-right: 0px;
`;
export const InfiniteScrollContent = styled.div`
    width: 100%;
`;
