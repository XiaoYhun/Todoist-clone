import styled from "styled-components";

export const ProjectContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
`;
export const ContentSection = styled.section`
    flex-shrink: 0;
`;
export const SectionHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    border-bottom: 1px solid #f0f0f0 !important;
    padding: 0;
    background-color: #fff;
    & h2 {
        text-align: left;
        padding: 6px 30px 5px 0;
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        flex: 1;
        margin: 0;
        word-wrap: break-word;
        word-break: break-word;
    }
`;
export const SectionHeaderActions = styled.div`
    cursor: pointer;
    font-size: 14px;
    color: red;
`;
export const ContentList = styled.ul`
    padding: 0;
`;
