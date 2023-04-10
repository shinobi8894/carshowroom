import React from "react";
import { Outlet } from "react-router-dom";
import { Container, DashLayoutWrapper } from "./styles/dash.styled";
import Header from "./components/header";
import Toolbar from "components/toolbar";

interface PropsType {
}

const DashLayout: React.FC<PropsType> = ({ ...rest }) => {
    return (
        <DashLayoutWrapper {...rest}>
            <Toolbar />
            <Header />
            <Container>
                <Outlet />
            </Container>
        </DashLayoutWrapper>
    );
};

export default DashLayout;
