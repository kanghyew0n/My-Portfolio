import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="innerContainer">
                <div className="logo"></div>
                <div className="logo2"></div>
                <HeaderItems>
                    <li>Who am I</li>
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
        padding: 0 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

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
