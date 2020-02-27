import styled from "styled-components";

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    height: calc(100vh - 200px);

    p {
        /* text-align: center; */
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    img {
        /* max-height: 80vh; */
        width: 100%;
    }
`;

export const AboutH1 = styled.h1`
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
    /* text-align: center; */
`;
