import styled from "styled-components";

export const LeftMenuWrapper = styled.div`
    width: 350px;
    height: calc(100vh - 45px) !important;
    display: flex;
    background-color: #fafafa;
    padding-top: 30px;
    padding-left: 35px;
    flex-direction: column;
`;
export const TopFilters = styled.ul`
    padding-left: 0px;
`;

export const Filter = styled.li`
    list-style: none;
    border-radius: 5px;
    padding-right: 18px;
    font-size: 14px;
    padding: 5px 16px 5px 5px;
    transition: color 0.1s ease-in, background-color 0.1s ease-in;
    line-height: 1.25;
    display: flex;
    color: #333;
    cursor: pointer;
    min-height: 24px;
    &:hover {
        background: #ececec;
        font-weight: 400;
    }
`;

export const FilterIcon = styled.span`
    width: 28px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-top: -1px;
    font-size: 14px;

    color: ${(props) => (props.color ? props.color : "initial")};
`;

export const FilterName = styled.span`
    display: flex;
    flex: 1;
    align-items: center;

    & small {
        color: #aaa;
        margin-left: auto;
        padding-left: 5px;
    }
`;
