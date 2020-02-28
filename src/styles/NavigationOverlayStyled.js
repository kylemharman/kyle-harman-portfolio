import styled from "styled-components";
import { Link } from "@reach/router";

export const NavigationOverlayNav = styled.nav`
    display: grid;
    grid-template-columns: 135px auto 135px;
    align-items: center;
    justify-items: center;
    overflow-x: hidden;
    background-color: white;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    transform: ${props =>
        props.active ? "translateX(0%)" : "translateX(-100%)"};
    overflow: clip;

    @media (max-width: 768px) {
        grid-template-columns: 0 1fr 0;
    }
`;

export const StyledNavLink = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 6rem;
    margin: 0.5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: url(${props => props.background});
        background-size: contain;
        background-position: center;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 0px;
        color: transparent;
    }

    @media (max-width: 768px) {
        font-size: 4rem;
        -webkit-text-stroke-width: 0px;
        background: url(${props => props.background});
        background-size: contain;
        background-position: center;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    @media (max-width: 425px) {
        font-size: 3rem;
    }
`;

export const SocialsContainerRight = styled.div`
    /* position: absolute; */
    /* right: 75px; */
    /* top: calc(50% + 75px); */
    transform: rotate(90deg);
    /* transform-origin: bottom right; */
    /* text-align: center; */

    a {
        margin-left: 30px;
        padding: 50px 0;
        transition: 0.3s ease;
        border-top: 5px solid white;
        border-bottom: 1px solid black;

        &:hover {
            border-top: 5px solid blue;
            border-bottom: 1px solid white;
            color: blue;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SocialsContainerLeft = styled.div`
    /* position: absolute; */
    /* left: 75px; */
    /* top: calc(50% + 60px); */
    transform: rotate(-90deg);
    /* transform-origin: bottom left; */
    /* text-align: center; */

    a {
        margin-right: 30px;
        padding: 50px 0;
        transition: 0.3s ease;
        border-top: 5px solid white;
        border-bottom: 1px solid black;

        &:hover {
            border-top: 5px solid blue;
            border-bottom: 1px solid white;
            color: blue;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
