import styled from "styled-components";
export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    position: sticky;
    padding-top: 30px;
    top: 0;
    background-color: white;
    flex-shrink: 0;
    margin-bottom: 24px;
    z-index: 3;
`;
export const HeaderContent = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    & h1 span {
        font-size: 20px;
        font-weight: 700;
    }

    & h1 small {
        font-size: 12px;
        color: #888;
        font-weight: 400;
        margin-left: 6px;
    }
`;
