import Layout from "../components/Layout";
import useScroll from "../hooks/useScroll";
import styled from "styled-components";
import ItsMe from "../components/ItsMe";
import MainText from "../components/MainText";
import Header from "../components/Header";
import WhyFeDev from "../components/WhyFeDev";

export default function Home() {
    return (
        <Container>
            <Layout>
                <MainText />
                <ItsMe />
                <WhyFeDev />
            </Layout>
        </Container>
    );
}

const Container = styled.div``;
