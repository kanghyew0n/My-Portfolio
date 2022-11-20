import { useRef } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ItsMe from "../components/ItsMe";
import MainText from "../components/MainText";
import WhyFeDev from "../components/WhyFeDev";

export default function Home() {
    const itsMeRef = useRef(null);

    const onItsMeClick = () => {
        itsMeRef.current?.scrollIntoView({ behavior: "smooth" });
        console.log("itsMeRef", itsMeRef);
    };

    return (
        <Container>
            <Layout onItsMeClick={onItsMeClick}>
                <MainText />
                <ItsMe itsMeRef={itsMeRef} />
                <WhyFeDev />
            </Layout>
        </Container>
    );
}

const Container = styled.div``;
