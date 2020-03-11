import styled from "styled-components";

export const ProjectCardContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
    box-shadow: 4px 4px 25px -10px #ccc;
    overflow: hidden;
    transition: 0.3s ease-out;
    cursor: pointer;

    h3 {
        font-weight: bold;
    }

    img {
        width: 100%;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 20px 20px 20px -10px #ccc;
    }
`;

export const ProjectCardTitleDiv = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 1em;

    i {
        margin: 5px;
        color: #ccc;
        transition: 0.3s ease-in-out;

        &:hover {
            color: blue;
        }
    }
`;
export const ProjectCardContentP = styled.p`
    flex-grow: 1;
    padding: 0 1em;
    line-height: 1.4em;
`;

export const ProjectCardTechIconsDiv = styled.div`
    padding: 0 1em 1em 1em;

    img {
        margin: 5px;
        width: 1.6em;
    }
    .rails {
        width: 1.3em;
    }
    .mongo {
        height: 2em;
    }
    .sass {
        width: 2em;
    }
`;
