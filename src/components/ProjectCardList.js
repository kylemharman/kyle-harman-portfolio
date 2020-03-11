import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import { ProjectCardListContainer } from "../styles/ProjectCardListStyled";

const ProjectCardList = () => {
    const listOfProjects = projectData.map(project => (
        <ProjectCard
            key={project.key}
            image={project.image}
            title={project.title}
            linkToProject={project.linkToProject}
            gitHubLink={project.gitHubLink}
            copy={project.copy}
            techIcons={project.techIcons}
        />
    ));

    return (
        <ProjectCardListContainer>{listOfProjects}</ProjectCardListContainer>
    );
};

export default ProjectCardList;
