import styled from "styled-components";
import useScroll from "../hooks/useScroll";
import InfoCard from "./ui/InfoCard";
import { REASON } from "../constant.js";
import ReasonCard from "./ui/ReasonCard";

const WhyFeDev = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);
    return (
        <Container>
            <h2>&nbsp;&nbsp;💻 &nbsp;Why FrontEnd Developer ?</h2>
            <WhyFeDevContainer>
                {REASON.map((info, idx) => (
                    <ReasonCard info={info} key={idx} />
                ))}
            </WhyFeDevContainer>
        </Container>
    );
};

const Container = styled.div`
    padding: 164px 4rem 0 4rem;
    h2 {
        margin-bottom: 48px;
        font-size: 32px;
    }
`;

const WhyFeDevContainer = styled.div`
    display: flex;
    gap: 32px;
`;

export default WhyFeDev;
