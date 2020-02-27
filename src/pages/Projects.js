import React from "react";
import ProjectCardList from "../components/ProjectCardList";
import { HeroH1 } from "../styles/HomeStyled";
import projectsLinkImg from "../assets/projects-link.jpg";

export default function Projects() {
    return (
        <React.Fragment>
            {/* <HeroH1 top background={projectsLinkImg}>
                Projects.
            </HeroH1> */}

            <ProjectCardList />
        </React.Fragment>
    );
}
