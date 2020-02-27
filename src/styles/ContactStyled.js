import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 80vh;
    margin: 0 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContactH1 = styled.a`
    text-align: center;
    background: url(${props => props.background});
    background-size: contain;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 0;
    color: transparent;
    font-size: 6rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`;
