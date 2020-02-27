import React from "react";
import {
    ProjectCardContainerDiv,
    ProjectCardTitleDiv,
    ProjectCardContentP,
    ProjectCardTechIconsDiv
} from "../styles/ProjectCardStyled";

const ProjectCard = props => {
    return (
        <ProjectCardContainerDiv>
            <img src={props.image} alt="project"></img>
            <ProjectCardTitleDiv>
                <h3>{props.title}</h3>
                <div>
                    <a
                        href={props.linkToProject}
                        alt="See the project."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-link fa-lg"></i>
                    </a>
                    <a
                        href={props.gitHubLink}
                        alt="See projects codebase."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-code fa-lg"></i>
                    </a>
                </div>
            </ProjectCardTitleDiv>

            <ProjectCardContentP>{props.copy}</ProjectCardContentP>

            <ProjectCardTechIconsDiv>
                <div>
                    {props.techIcons.map((icon, index) => (
                        <img
                            src={icon.icon}
                            alt={icon.alt}
                            className={icon.className}
                            key={index}
                        ></img>
                    ))}
                </div>
            </ProjectCardTechIconsDiv>
        </ProjectCardContainerDiv>
    );
};

export default ProjectCard;
