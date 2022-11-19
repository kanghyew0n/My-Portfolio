import styled from "styled-components";
import useScroll from "../hooks/useScroll";

const WhoAmI = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);
    return <WhoAmIContainer>
        <h2></h2>
    </WhoAmIContainer>;
};

const WhoAmIContainer = styled.div`
`;

export default WhoAmI;
