import styled from "styled-components";
import { Link } from "@reach/router";

export const HomeGrid = styled.div`
    height: calc(100vh - 200px);
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 130px auto 130px;
    align-items: center;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 0 1fr 0;
        height: calc(100vh - 300px);
    }
`;

export const HeroH1 = styled.h1`
    text-align: center;
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

    @media (max-width: 768px) {
        font-size: 5rem;
    }

    @media (max-width: 425px) {
        font-size: 4rem;
    }
    @media (max-width: 375px) {
        font-size: 3rem;
    }
`;

export const HeroBody = styled.p`
    text-align: center;
    font-size: 1.3rem;
    padding: 0 30px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const StyledH1Link = styled(Link)`
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
        color: blue;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 30px 50px;

    @media (max-width: 425px) {
        padding: 20px;
    }
`;
