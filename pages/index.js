import Layout from "../components/Layout";
import useScroll from "../hooks/useScroll";
import styled from "styled-components";
import WhoAmI from "../components/WhoAmI";
import Header from "../components/Header";

export default function Home() {
    const { scrollY } = useScroll();

    return (
        <Container>
            <Header />
            <WhoAmI />
        </Container>
    );
}

const Container = styled.div``;
