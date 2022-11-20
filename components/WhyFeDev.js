import styled from "styled-components";
import { REASON } from "../constant.js";
import ReasonCard from "./ui/ReasonCard";
import { BREAK_POINT_DESKTOP, BREAK_POINT_TABLET, BREAK_POINT_PHONE } from "../constant";

const WhyFeDev = () => {
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
    padding: 164px 0 0 0;
    h2 {
        margin-bottom: 48px;
        font-size: 32px;
        text-align: center;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        padding: 100px 0 0 0;
        h2 {
            margin-bottom: 32px;
            font-size: 24px;
        }
    }
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 84px 0 0 0;
        h2 {
            margin-bottom: 24px;
            font-size: 20px;
        }
    }

`;

const WhyFeDevContainer = styled.div`
    display: flex;
    gap: 32px;

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        flex-direction: column;
    }
`;

export default WhyFeDev;
