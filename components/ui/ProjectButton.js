import styled from "styled-components";
import Link from "next/link";

const ProjectButton = () => {
    return (
        <Container>
            <Link href="/project">
                <span> Project 보러가기 →</span>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span {
        padding: 15px 20px;
        border: 1px solid #eee;
        border-radius: 50px;
    }
`;

export default ProjectButton;
