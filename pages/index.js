import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/ui/Layout";
import ItsMe from "../components/mainPage/ItsMe";
import MainText from "../components/mainPage/MainText";
import ProjectButton from "../components/ui/ProjectButton";

export default function Home() {
    const itsMeRef = useRef(null);
    const router = useRouter()

    const onItsMeClick = () => {
        if (router.pathname !== '/') router.push('/')

        itsMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Layout onItsMeClick={onItsMeClick}>
                <MainText />
                <ItsMe itsMeRef={itsMeRef} />
                <ProjectButton />
            </Layout>
        </>
    );
}
