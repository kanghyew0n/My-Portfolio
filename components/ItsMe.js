import { forwardRef } from "react";
import styled from "styled-components";
import InfoCard from "./ui/InfoCard";
import { INFO } from "../constant.js";
import {
    BREAK_POINT_DESKTOP,
    BREAK_POINT_TABLET,
    BREAK_POINT_PHONE,
} from "../constant";

const POINTER = forwardRef((props, ref) => {
    return (
        <div className="titleGroup">
            <h2 ref={ref}>&nbsp;&nbsp;It's Me !</h2>
            <div className="line"></div>
        </div>
    );
});

const ItsMe = ({ itsMeRef }) => {
    return (
        <Container>
            <POINTER ref={itsMeRef} />
            <ItsMeContainer>
                {INFO.map((info, idx) => (
                    <InfoCard info={info} key={idx} />
                ))}
            </ItsMeContainer>
        </Container>
    );
};

const Container = styled.div`
    padding: 25vw 0 0 0;

    .titleGroup {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 48px;
    }

    h2 {
        font-size: 4vw;
        width: 100%;
    }
    .line {
        position: absolute;
        height: 1px;
        background-color: #999;
        right: 0;
        left: 28vw;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        h2 {
            font-size: 32px;
        }
        .line {
            left: 35vw;
        }
    }
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        h2 {
            font-size: 28px;
        }
        .line {
            left: 45vw;
        }
    }
`;

const ItsMeContainer = styled.div`
    display: flex;
    gap: 32px;

    @media only screen and (max-width: ${BREAK_POINT_DESKTOP}px) {
        flex-direction: column;
    }
`;

export default ItsMe;
