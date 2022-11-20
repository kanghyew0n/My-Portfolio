import styled from "styled-components";
import Link from "next/link";
import { BREAK_POINT_TABLET } from "../constant";

const Header = ({ onItsMeClick }) => {
    return (
        <HeaderContainer>
            <div className="innerContainer">
                <Link href="/">
                    <Logo>
                        <div className="logo"></div>
                        <div className="logo2"></div>
                    </Logo>
                </Link>

                <HeaderItems>
                    <li onClick={onItsMeClick}>It's Me !</li>
                    <li>Project</li>
                    <li>Contact</li>
                </HeaderItems>
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    position: fixed;
    background-color: #151515;
    z-index: 200;

    .innerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;

        .logo,
        .logo2 {
            width: 30px;
            height: 30px;
            background-color: #eee;
            border-radius: 50%;
        }

        .logo2 {
            background-color: transparent;
            border: 1px solid #eee;
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        height: 60px;

        .innerContainer {
            padding: 0 1rem;

            .logo,
            .logo2 {
                width: 25px;
                height: 25px;
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    cursor: pointer;
`;

const HeaderItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 48px;
    height: 80px;
    li {
        font-size: 20px;
        font-weight: 300;
        cursor: pointer;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        height: 60px;
        li {
            gap: 32px;
            font-size: 18px;
        }
    }
`;
export default Header;
