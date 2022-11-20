import styled from "styled-components";
import useScroll from "../hooks/useScroll";
import InfoCard from "./ui/InfoCard";
import { INFO } from "../constant.js";

const WhoAmI = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);
    return (
        <WhoAmIContainer>
            {INFO.map((info, idx) => (
                <InfoCard info={info} key={idx} />
            ))}
        </WhoAmIContainer>
    );
};

const WhoAmIContainer = styled.div`
    padding: 22vw 4rem 0 4rem;
    display: flex;
    gap: 32px;
`;

export default WhoAmI;
