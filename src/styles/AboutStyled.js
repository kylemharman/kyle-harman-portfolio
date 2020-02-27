import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 80vh;
    margin: 0 50px 50px 50px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 1fr;

    grid-gap: 3em;
    /* align-items: center; */

    p {
        font-size: 1.2rem;
        line-height: 1.8rem;
        /* width: 80%; */
        margin-bottom: 0px;
    }

    .photo {
        grid-column: 1;
        grid-row: span 2;

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }

    .copy {
        grid-column: 2;
        grid-row: 1;
        padding: 0 3em;
    }
    .navigationLinks {
        grid-column: 2;
        grid-row: 2;
        justify-self: end;
        align-self: end;
    }
`;

export const AboutH1 = styled.h1`
    line-height: 0.9em;
    background: url(${props => props.background});
    background-size: contain;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 0;
    margin-bottom: 50px;
    color: transparent;
    font-size: 6rem;
`;
