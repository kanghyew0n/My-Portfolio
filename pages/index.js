import { useRef } from "react";
import Layout from "../components/ui/Layout";
import ItsMe from "../components/mainPage/ItsMe";
import MainText from "../components/mainPage/MainText";
import WhyFeDev from "../components/mainPage/WhyFeDev";
import ProjectButton from "../components/ui/ProjectButton";

export default function Home() {
    const itsMeRef = useRef(null);

    const onItsMeClick = () => {
        itsMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Layout onItsMeClick={onItsMeClick}>
                <MainText />
                <ItsMe itsMeRef={itsMeRef} />
                <WhyFeDev />
                <ProjectButton />
            </Layout>
        </>
    );
}
