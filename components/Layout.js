import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { BREAK_POINT_DESKTOP, BREAK_POINT_TABLET } from "../constant";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

const Container = styled.div`
    padding: 0 4rem;
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        padding: 0 1rem;
    }
`;

export default Layout;
