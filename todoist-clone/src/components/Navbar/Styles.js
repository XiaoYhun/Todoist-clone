import styled from "styled-components";
import { color } from "shared/utils/styles";
import Input from "shared/components/Input";

export const Navbar = styled.div`
    background-color: ${color.primary};
    height: 45px;
    color: white;
    z-index: 300;
`;
export const NavbarInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;
    margin: auto;
`;
export const LeftNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const RightNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SearchInput = styled(Input)`
    width: 198px;

    &:hover input {
        background-color: white;
        &::placeholder {
            color: #999;
        }
    }

    &:hover svg {
        color: #555 !important;
    }
`;
