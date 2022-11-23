import styled from "styled-components";
import Image from "next/image";
import {
    BREAK_POINT_DESKTOP,
    BREAK_POINT_TABLET,
    BREAK_POINT_PHONE,
} from "../../constant";
import Tag from "../ui/Tag";

const ProjectCard = ({ project }) => {
    return (
        <Container>
            <div className="ProjectImageBox">
                <Image
                    src={project.projectImage}
                    width={500}
                    height={500}
                    className="projectDemo"
                    alt="서울인펫키지 이미지"
                />
                <Image
                    src={project.hoverProjectImage}
                    width={500}
                    height={500}
                    className="hoverImage"
                    alt="서울인펫키지 이미지"
                />
            </div>
            <ProjectInfo>
                <TitleNbutton>
                    <div className="titleGroup">
                        <div className="Maintitle">{project.projectName}</div>

                        <div className="withTag">
                            <div className="description">
                                {project.description}
                            </div>
                            <Tag text={project.team} />
                        </div>
                    </div>
                    <div
                        className="imageBox"
                        onClick={() => window.open(`${project.githubLink}`)}
                    >
                        <Image
                            src="/assets/github.svg"
                            width={32}
                            height={32}
                            className="projectImg"
                            alt="깃허브 이미지"
                        />
                    </div>
                </TitleNbutton>
                <div className="date">{project.date}</div>
                <p className="detailDescription">{project.detailDescription}</p>
                <StackContainer>
                    <div className="stackGroup">
                        <span className="groupTitle">📚 Front Stack</span>
                        <span className="groupItem">
                            {project.feStack.map((stack, idx) => (
                                <span className="stackTag" key={idx}>
                                    {stack}
                                </span>
                            ))}
                        </span>
                    </div>
                    {project.beStack ? (
                        <div className="stackGroup">
                            <span className="groupTitle">📚 Back Stack</span>
                            <span className="groupItem">
                                {project.beStack.map((stack, idx) => (
                                    <span className="stackTag" key={idx}>
                                        {stack}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ) : (
                        ""
                    )}
                </StackContainer>
            </ProjectInfo>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 48px;
    width: 100%;
    padding: 3vw 3vw 4vw 3vw;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;

    .ProjectImageBox {
        width: calc((100% - 16px) / 2);
        height: 400px;
        background-color: #eee;
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        &:hover {
            .hoverImage {
                transform: translateY(-405px);
            }
        }
    }

    .hoverImage {
        object-fit: cover;
        width: 100%;
        z-index: -10;
        height: 100%;
        transition: all 0.3s ease-in-out;
    }

    .projectDemo {
        object-fit: cover;
        width: 100%;
        z-index: -100;
        height: 100%;
        transition: all 0.3s ease-in-out;
    }

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        display: block;
        .ProjectImageBox {
            width: 100%;
            height: 300px;
            background-color: #eee;
            border-radius: 15px;
            &:hover {
                .hoverImage {
                    transform: translateY(-305px);
                }
            }
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        padding: 25px;
    }

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 10px;
        .ProjectImageBox {
            height: 200px;
            &:hover {
                .hoverImage {
                    transform: translateY(-205px);
                }
            }
        }
    }
`;

const ProjectInfo = styled.div`
    width: calc((100% - 16px) / 2);

    .date {
        font-weight: 300;
        font-size: 16px;
        color: #999;
        margin-bottom: 20px;
    }

    .detailDescription {
        font-weight: 300;
        font-size: 18px;
        line-height: 160%;
        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid #424242;
    }

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        width: 100%;
        margin-top: 48px;

        .date {
            font-size: 14px;
            margin-bottom: 20px;
        }

        .detailDescription {
            font-size: 16px;
            line-height: 160%;
            padding-bottom: 24px;
            margin-bottom: 24px;
        }
    }
`;

const TitleNbutton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .titleGroup {
        margin-bottom: 12px;
        .Maintitle {
            font-weight: 800;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .description {
            font-weight: 400;
            font-size: 18px;
        }

        .withTag {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }

    .imageBox {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        .titleGroup {
            .Maintitle {
                font-size: 22px;
            }

            .description {
                font-size: 16px;
            }
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        .imageBox {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 100;
        }
    }
`;

const StackContainer = styled.div`
    width: 100%;
    .stackGroup {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        margin-bottom: 16px;
    }

    .stackGroup.border {
        border-top: 1px solid #424242;
        padding-top: 16px;
    }

    .groupTitle {
        width: 30%;
        font-weight: 600;
        cursor: pointer;
    }

    .groupItem {
        width: 100%;
        line-height: 150%;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .groupItem.link {
        color: #aec0ff;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        .groupTitle {
            width: 20%;
        }

        .stackGroup {
            display: block;
        }
    }
`;

export default ProjectCard;
