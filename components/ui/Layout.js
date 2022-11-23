import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { BREAK_POINT_TABLET } from "../../constant";
import MetaTag from "../MetaTag";

const Layout = ({ children, onItsMeClick }) => {
    return (
        <>
            <MetaTag />
            <Header onItsMeClick={onItsMeClick} />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

const Container = styled.div`
    padding: 80px 4rem 0 4rem;
    min-height: calc(100vh - 360px);
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        padding: 60px 1rem 0 1rem;
    }
`;

export default Layout;
