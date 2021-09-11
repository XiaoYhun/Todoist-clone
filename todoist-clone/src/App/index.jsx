import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "components/Navbar";
import LeftMenu from "components/LeftMenu";
import styled from "styled-components";
import AddTaskModal from "components/AddTaskModal";
const AppWrapper = styled.div`
    /* padding-left: 340px; */
    /* padding-top: 45px; */
    display: flex;
    flex-direction: column;
`;

const MainWrapper = styled.main`
    display: flex;
    overflow: hidden;
    position: relative;
    height: calc(100vh - 45px) !important;
`;

export default function App() {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);

    const handleAddClick = (e) => {
        e.preventDefault();
        setIsOpenAddModal(true);
    };

    return (
        <AppWrapper>
            <BrowserRouter>
                <Navbar onAddClick={handleAddClick} />
                <MainWrapper>
                    <LeftMenu />
                    <Routes />
                </MainWrapper>
                <AddTaskModal
                    isOpen={isOpenAddModal}
                    onClose={() => setIsOpenAddModal(false)}
                />
            </BrowserRouter>
        </AppWrapper>
    );
}
