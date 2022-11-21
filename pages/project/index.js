import Layout from "../../components/ui/Layout";
import styled from "styled-components";
import ProjectCard from "../../components/projectPage/ProjectCard";
import { PROJECT, BREAK_POINT_TABLET, BREAK_POINT_PHONE } from "../../constant";
export default function Project() {
    return (
        <Layout>
            <Container>
                <h2>&nbsp;&nbsp;Project</h2>
                <div className="line"></div>
                {PROJECT.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </Container>
        </Layout>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 64px;

    h2 {
        padding-top: 100px;
        font-size: 48px;
        width: 100%;
    }

    .line {
        position: absolute;
        height: 1px;
        background-color: #999;
        right: 0;
        left: 22vw;
        top: 215px;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        h2 {
            padding-top: 60px;
            font-size: 32px;
        }
        .line {
            left: 30vw;
            top: 140px;
        }
    }
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        h2 {
            padding-top: 60px;
            font-size: 28px;
        }
        .line {
            left: 45vw;
            top: 140px;
        }
    }
`;
