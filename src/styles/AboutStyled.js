import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 80vh;
    margin: 0 50px 50px 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 1fr;
    grid-gap: 3em;

    @media (max-width: 1024px) {
        grid-gap: 1em;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 0px;

        @media (max-width: 425px) {
            font-size: 1rem;
        }
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
        @media (max-width: 768px) {
            padding: 0;
        }
    }
    .navigationLinks {
        grid-column: 2;
        grid-row: 2;
        justify-self: end;
        align-self: end;

        @media (max-width: 768px) {
            justify-self: center;
            align-self: center;
            margin-bottom: 30px;
        }
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

    @media (max-width: 768px) {
        font-size: 4rem;
    }
    @media (max-width: 425px) {
        font-size: 3rem;
    }
`;
