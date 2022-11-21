import styled from "styled-components";
import useScroll from "../../hooks/useScroll";
import Image from "next/image";

const Header = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);
    return (
        <HeaderContainer
            alignItems={scrollY > 0 ? "center" : ""}
            height={scrollY > 60 ? "80px" : ""}
        >
            <div className="innerContainer">
                <LogoContainer
                    fontSize={scrollY > 60 ? "24px" : ""}
                    postion={scrollY > 60 ? "static" : ""}
                    top={scrollY > 60 ? "24px" : ""}
                >
                    <h2>Kanghyew0n</h2>
                </LogoContainer>
                <HeaderItems opacity={scrollY > 60 ? "1" : ""}>
                    <li>
                        Who am I
                        {/* <Image
                            width={155}
                            height={140}
                            src="/assets/Union.svg"
                        /> */}
                    </li>
                    <li>Project</li>
                    <li>Contact</li>
                </HeaderItems>
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    height: ${(props) => props.height || "300px"};
    width: 100%;
    position: fixed;
    background-color: #f8f8f8;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid #000;

    .innerContainer {
        padding: 0 4rem;
        display: flex;
        align-items: ${(props) => props.alignItems || "none"};
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    position: absolute;
    top: ${(props) => props.top || "80px"};
    transition: all 0.3s ease-in-out;
    h2 {
        transition: all 0.3s ease-in-out;
        font-size: ${(props) => props.fontSize || "clamp(10vw, 15vw, 13vw)"};
    }
`;

const HeaderItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 48px;
    height: 80px;

    li {
        transition: all 0.3s ease-in-out;
        position: relative;
        font-size: 20px;
        font-weight: 300;
    }

    img {
        transition: all 0.3s ease-in-out;
        opacity: ${(props) => props.opacity || "0"};
        position: absolute;
        top: -15px;
        left: -50px;
    }
`;
export default Header;
