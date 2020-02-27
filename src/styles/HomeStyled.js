import styled from "styled-components";
import { Link } from "@reach/router";

export const HeroH1 = styled.h1`
    text-align: center;
    width: 50%;
    line-height: 0.9em;
    padding: 1rem 0;
    background: url(${props => props.background});
    background-size: contain;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 0;
    color: transparent;
    font-size: 6rem;
`;

export const HeroBody = styled.h3`
    text-align: center;
    display: inline-block;
`;

export const StyledH1Link = styled(Link)`
    margin: 0 0 0 30px;
    font-weight: 700;
    font-size: 2rem;
`;

export const NavigationContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 30px 50px;
`;

export const ContactContainer = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    padding: 30px 50px;
`;
