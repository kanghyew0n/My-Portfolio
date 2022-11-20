import styled from "styled-components";
import { useState } from "react";

const MainText = () => {
    const [click, setClick] = useState(false);

    return (
        <MainTextContainer opacity={click ? "1" : ""}>
            <InnerContainer>
                <div className="mainText" onClick={() => setClick(!click)}>
                    Kanghyew0n
                </div>
                <p className="FE">💻 &nbsp;Frontend Developer</p>
                <p className="INTEREC">👀 &nbsp;Interection</p>
                <p className="COMMU">💬 &nbsp;Communication</p>
                <p className="REC">✏️ &nbsp;Recording</p>
            </InnerContainer>
        </MainTextContainer>
    );
};

const MainTextContainer = styled.div`
    padding-top: 255px;
    margin: 0 auto;
    width: 100%;
   


    .mainText {
        font-size: 13vw;
        cursor: default;
        text-align: center;
        font-weight: 700;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
       
    }

    p {
        position: absolute;
        font-size: clamp(0.7rem, 2.5vw, 1.1rem);
        top: 0;
        padding: 15px 30px;
        background: rgba(238, 238, 238, 0.1);
        border: 2px dashed rgba(238, 238, 238, 0.5);
        border-radius: 50px;
        animation: point 1s 3 alternate;
        transition: none;
        transition: all 0.3s ease-in-out;
    }

    .FE {
        top: -80px;
        left: 19vw;
    }
    .INTEREC {
        top: 19vw;
        left: 13vw;
    }
    .COMMU {
        top: 18vw;
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
`;
 
const InnerContainer = styled.div`
position: relative;
`

export default MainText;
