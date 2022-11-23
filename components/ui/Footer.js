import styled from "styled-components";

const Footer = () => {
    return <FooterContainer>Click Me!&nbsp; 👉 &nbsp;<a href="https://github.com/kanghyew0n">Kanghyew0n</a></FooterContainer>;
};

const FooterContainer = styled.div`
    background-color: #111;
    height: 100px;
    margin-top: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: underline;
    }
`;

export default Footer;
