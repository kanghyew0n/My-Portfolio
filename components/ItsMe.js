import styled from "styled-components";
import useScroll from "../hooks/useScroll";
import InfoCard from "./ui/InfoCard";
import { INFO } from "../constant.js";
import { BREAK_POINT_DESKTOP } from "../constant";

const ItsMe = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);
    return (
        <ItsMeContainer>
            {INFO.map((info, idx) => (
                <InfoCard info={info} key={idx} />
            ))}
        </ItsMeContainer>
    );
};

const ItsMeContainer = styled.div`
    padding: 22vw 0 0 0;
    display: flex;
    gap: 32px;

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
       flex-direction: column;
    }
`;

export default ItsMe;
