import React from "react";
import {
    ProjectCardContainerDiv,
    ProjectCardTitleDiv,
    ProjectCardContentP,
    ProjectCardTechIconsDiv
} from "../styles/ProjectCardStyled";

const ProjectCard = props => {
    return (
        <ProjectCardContainerDiv
            onClick={() => window.open(props.linkToProject, "_blank")}
        >
            <img src={props.image} alt="project"></img>
            <ProjectCardTitleDiv>
                <h3>{props.title}</h3>
                <div onClick={() => window.open(props.gitHubLink, "_blank")}>
                    <i className="fab fa-github fa-lg"></i>
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
