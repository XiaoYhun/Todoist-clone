import React from "react";
import {
    Navbar,
    NavbarInner,
    LeftNavbar,
    RightNavbar,
    SearchInput,
} from "./Styles";
import NavButton from "./NavButton";

export default function AppNavbar({ onAddClick }) {
    return (
        <Navbar>
            <NavbarInner>
                <LeftNavbar>
                    <NavButton icon="menu" />
                    <NavButton icon="home" />
                    <SearchInput
                        className=""
                        hasIcon
                        iconType="search"
                        placeholder="Search"
                    />
                </LeftNavbar>
                <RightNavbar>
                    <NavButton icon="add" onClick={onAddClick} />
                    <NavButton icon="bell" />
                    <NavButton className="avatar">
                        <img
                            alt="sdasd"
                            src="https://avatars.doist.com?fullName=%C4%90i%E1%BB%87p%20Ph%E1%BA%A1m&email=xiaoyhun%40gmail.com&s"
                            height="30px"
                            width="30px"
                        />
                    </NavButton>
                </RightNavbar>
            </NavbarInner>
        </Navbar>
    );
}
