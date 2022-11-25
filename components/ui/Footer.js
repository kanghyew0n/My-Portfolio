import styled from "styled-components";

const Footer = () => {
    return <FooterContainer>
        @kanghyew0n portfolio &nbsp; 👉 &nbsp;
        <a href="https://github.com/kanghyew0n" target='_blank'>github</a>
        <span>&nbsp; & &nbsp;</span>
        <a href="https://kanghyew0n.github.io/" target='_blank'>blog</a>
    </FooterContainer>;
};

const FooterContainer = styled.div`
    background-color: #111;
    height: 100px;
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: underline;
    }
`;

export default Footer;
