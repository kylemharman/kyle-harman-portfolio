import styled from 'styled-components';

export const ProjectCardContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 28%;
    margin: 1em;
    border-radius: 10px;
    -webkit-box-shadow: 4px 4px 25px -10px #ccc;
    -moz-box-shadow: 4px 4px 25px -10px #ccc;
    box-shadow: 4px 4px 25px -10px #ccc;
    overflow: hidden;
    transition: 0.5sec ease-in-out;
    
    h3 {
        font-weight: bold;       
    }

    img {
        width: 100%;   
    }

    @media (max-width: 768px) {
        width: 40%;
    } 

    @media (max-width: 425px) {
            width: 100%;
    } 
`

export const ProjectCardTitleDiv = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 1em;

    i {
        margin: 5px;
        color: #ccc;
        transition: 0.5s ease-in-out;

        &:hover {
            color: black;
        }
    }
`
export const ProjectCardContentP = styled.p`
    flex-grow: 1;
    padding: 0 1em;
`

export const ProjectCardTechIconsDiv = styled.div`
    padding: 0 1em 1em 1em;
    
    img {
    margin: 5px;
    width: 1.6em;  
    }
    .rails {
        width: 1.3em;  
    }
`
