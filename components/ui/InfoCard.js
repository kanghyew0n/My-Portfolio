import styled from "styled-components";

const InfoCard = (props) => {
    return (
        <InfoCardContainer>
            <div className="icon">{props.info.icon}</div>
            <p className="keyword">{props.info.keyWord}</p>
            <p className="sunTitle">{props.info.subTitle}</p>
            <p className="content">{props.info.content}</p>
        </InfoCardContainer>
    );
};

const InfoCardContainer = styled.div`
    width: calc((100% - 64px) / 3);
    height: 100%;
    padding: 40px 40px 60px 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    color: #eee;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;

    .icon {
        font-size: 50px;
        margin-bottom: 20px;
        width: 50px;
        transition: all 0.3s ease-in-out;
    }

    .keyword {
        font-size: 24px;
        font-weight: 600;
        /* margin-bottom: 7px; */
    }

    .sunTitle {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    .content {
        font-size: 18px;
        font-weight: 300;
    }

    p {
        line-height: 160%;
       
    }

    &:hover {
        transform: translateY(-20px);
        .icon {
            transform: scale(1.5) translateX(10px);
        }
        overflow-x: hidden;
    }
`;

export default InfoCard;
