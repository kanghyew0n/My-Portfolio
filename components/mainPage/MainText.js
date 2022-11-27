import styled from "styled-components";
import {
    BREAK_POINT_TABLET,
    BREAK_POINT_DESKTOP,
    BREAK_POINT_PHONE,
} from "../../constant";

const MainText = () => {
    return (
        <MainTextContainer>
            <InnerContainer>
                <div className="mainText">Kanghyew0n</div>
                <p className="FE">
                    💻 <span>Frontend Developer</span>
                </p>
                <p className="INTEREC">
                    👀 <span>Interection</span>
                </p>
                <p className="COMMU">
                    🏋️‍♀️ <span>Responsibility</span>
                </p>
                <p className="REC">
                    ✏️ <span>Recording</span>
                </p>
            </InnerContainer>
        </MainTextContainer>
    );
};

const MainTextContainer = styled.div`
    padding-top: 135px;
    margin: 0 auto;
    width: 100%;

    .mainText {
        font-size: 12vw;
        cursor: default;
        text-align: center;
        font-weight: 700;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        padding-top: 125px;
    }
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        padding-top: 130px;
    }
`;

const InnerContainer = styled.div`
    position: relative;

    p {
        position: absolute;
        font-size: clamp(0.7rem, 2.5vw, 1.1rem);
        top: 0;
        padding: 1vw 1.5vw;
        background: rgba(238, 238, 238, 0.1);
        border: 2px dashed rgba(238, 238, 238, 0.5);
        border-radius: 50px;
        animation: point 1s 3 alternate;
        transition: none;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    span {
        margin-left: 5px;
    }

    .FE {
        top: -80px;
        left: 19vw;
    }
    .INTEREC {
        top: 20vw;
        left: 13vw;
    }
    .COMMU {
        top: 19vw;
        right: 21vw;
    }
    .REC {
        top: -60px;
        right: 15vw;
    }

    @keyframes point {
        50% {
            opacity: 0.2;
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        .FE {
            top: -60px;
            left: 12vw;
        }
        .INTEREC {
            top: 20vw;
            left: 13vw;
        }
        .COMMU {
            top: 21vw;
            right: 15vw;
        }
        .REC {
            top: -60px;
            right: 12vw;
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        span {
            display: none;
        }
        p {
            font-size: 30px;
            padding: 0;
            background: none;
            border: none;
        }
        .FE {
            top: -60px;
            left: 12vw;
        }
        .INTEREC {
            top: -60px;
            left: 33vw;
        }
        .COMMU {
            top: -60px;
            right: 33vw;
        }
        .REC {
            top: -60px;
            right: 12vw;
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        p {
            font-size: 25px;
        }
    }
`;

export default MainText;
