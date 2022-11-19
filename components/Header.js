import styled from "styled-components";
import { useState } from "react";

const Header = () => {
    const [click, setClick] = useState(false);

    return (
        <HeaderContainer>
            <div className="innerContainer">
                <HeaderItems>
                    <li>Who am I</li>
                    <li>Project</li>
                    <li>Contact</li>
                </HeaderItems>
            </div>
            <LogoContainer opacity={click ? "1" : ""}>
                {/* <span>Click me!</span> */}
                <div className="mainName" onClick={() => setClick(!click)}>
                    Kanghyew0n
                </div>
                <p className="FE">💻 &nbsp;Frontend Developer</p>
                <p className="INTEREC">👀 &nbsp;Interection</p>
                <p className="COMMU">💬 &nbsp;Communication</p>
                <p className="REC">✏️ &nbsp;Recording</p>
            </LogoContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    position: fixed;
    background-color: #151515;

    .innerContainer {
        padding: 0 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    position: absolute;
    top: 220px;
    margin: 0 auto;
    width: 100%;

    .mainName {
        font-size: 13vw;
        cursor: pointer;
        text-align: center;
        font-weight: 700;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    p {
        position: absolute;
        font-size: 18px;
        top: 0;
        /* opacity: ${(props) => props.opacity || "0"}; */
        padding: 15px 30px;
        background: rgba(238, 238, 238, 0.1);
        border: 2px dashed rgba(238, 238, 238, 0.5);
        border-radius: 50px;
        animation: point 1s 2 alternate;
    }

    .FE {
        top: -55px;
        left: 17vw;
    }
    .INTEREC {
        top: 240px;
        left: 13vw;
    }
    .COMMU {
        top: 270px;
        right: 28vw;
    }
    .REC {
        top: -45px;
        right: 15vw;
    }

    @keyframes point {
        50% {
            opacity: 0;
        }
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
        position: relative;
        font-size: 20px;
        font-weight: 300;
    }
`;
export default Header;
