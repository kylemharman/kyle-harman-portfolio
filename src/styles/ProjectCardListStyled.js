import styled from "styled-components";

export const ProjectCardListContainer = styled.div`
    display: grid;
    margin: 10px 50px;
    grid-template-columns: repeat(4, 360px);
    grid-template-rows: auto;
    grid-column-gap: 20px;
    overflow: scroll;

    @media (max-width: 425px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        overflow: hidden;
    }
`;
