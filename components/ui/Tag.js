import React from "react";
import styled from "styled-components";

const Tag = ({text}) => {
    return <Container>{text}</Container>;
};

const Container = styled.span`
    padding: 7px 12px;
    background-color: #0038ff;
    color: #eee;
    text-align: center;
    border-radius: 50px;
    font-size: 14px;
    margin-left: 10px;
`;

export default Tag;
