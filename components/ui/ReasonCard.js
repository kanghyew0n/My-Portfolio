import styled from "styled-components";

const ReasonCard = (props) => {
    return (
        <ReasonCardContainer>
            {props.info.title.length === 2 ? (
                <>
                    <p className="title idx1">{props.info.title[0]}</p>
                    <p className="title idx2">{props.info.title[1]}</p>
                </>
            ) : (
                <>
                    <p className="title">{props.info.title[0]}</p>
                </>
            )}

            <>
                <span className="content">{props.info.content[0]}</span>
                <span className="highlight">{props.info.content[1]}</span>
                <span className="content">{props.info.content[2]}</span>
            </>
        </ReasonCardContainer>
    );
};

const ReasonCardContainer = styled.div`
    width: calc((100% - 64px) / 2);
    height: 100%;
    padding: 40px 40px 60px 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    color: #eee;
    border: 2px solid transparent;

    p,
    span {
        line-height: 160%;
        font-size: 18px;
        font-weight: 300;
    }

    .title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .content,
    .highlight {
        font-size: 18px;
    }

    .highlight {
        display: inline;
        background-repeat: no-repeat;
        transition: all 500ms ease-in-out;
        background-position: left;
        background-size: 0% 100%;
        background-image: linear-gradient(#0038ff, #0038ff);
        &:hover {
            background-size: 100% 100%;
        }
    }

    .title.idx1 {
        margin: 0;
    }

    &:hover {
        .highlight {
            background-size: 100% 100%;
        }
    }
`;

export default ReasonCard;
