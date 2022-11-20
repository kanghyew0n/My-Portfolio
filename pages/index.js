import Layout from "../components/Layout";
import useScroll from "../hooks/useScroll";
import styled from "styled-components";
import WhoAmI from "../components/WhoAmI";
import MainText from "../components/MainText";
import Header from "../components/Header";
import WhyFeDev from "../components/WhyFeDev";

export default function Home() {
    return (
        <Container>
            <Layout>
                <MainText />
                <WhoAmI />
                <WhyFeDev />
            </Layout>
        </Container>
    );
}

const Container = styled.div``;
