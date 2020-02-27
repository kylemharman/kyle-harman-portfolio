import React from "react";
import ProjectCardList from "../components/ProjectCardList";
import { HeroH1 } from "../styles/HomeStyled";
import { Container } from "../styles/Global";
import projectsLinkImg from "../assets/projects-link.jpg";

export default function Projects() {
    return (
        <React.Fragment>
            <Container>
                <HeroH1 top background={projectsLinkImg}>
                    My Work.
                </HeroH1>
            </Container>
            <ProjectCardList />
        </React.Fragment>
    );
}
