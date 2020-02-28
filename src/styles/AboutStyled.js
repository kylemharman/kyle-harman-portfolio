import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 80vh;
    margin: 30px 50px 50px 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
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

        @media (max-width: 425px) {
            font-size: 1rem;
        }
    }

    .photo {
        grid-column: 1;
        grid-row: span 2;
        justify-self: center;

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            grid-column: 1;
            grid-row: 1;

            img {
                width: 300px;
                height: 300px;
                border-radius: 50%;
            }
        }

        @media (max-width: 320px) {
            img {
                width: 200px;
                height: 200px;
            }
        }
    }

    .copy {
        grid-column: 2;
        grid-row: 1;
        padding: 0 3em;

        @media (max-width: 768px) {
            grid-column: 1;
            grid-row: 2;
            padding: 0;
            margin-bottom: 30px;
        }
    }
    .navigationLinks {
        grid-column: 2;
        grid-row: 2;
        justify-self: end;
        align-self: end;

        @media (max-width: 768px) {
            grid-column: 1;
            grid-row: 3;
            justify-self: center;
            align-self: center;
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
        text-align: center;
        margin-top: -70px;
        font-size: 5rem;
    }
    @media (max-width: 425px) {
        font-size: 4rem;
    }
`;
