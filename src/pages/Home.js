import React from "react";
import {
    HeroH1,
    HeroBody,
    StyledH1Link,
    NavigationContainer,
    ContactContainer
} from "../styles/HomeStyled";
import {
    SocialsContainerRight,
    SocialsContainerLeft
} from "../styles/NavigationOverlayStyled";
import { Container } from "../styles/Global";
import resume from "../assets/kyle-harman-resume.pdf";
import homeLinkImg from "../assets/home-link.jpg";

export default function Home() {
    return (
        <React.Fragment>
            <Container>
                <HeroH1 background={homeLinkImg}>Front End Developer</HeroH1>
                <HeroBody>
                    Living the dream in beautiful Sydney, Australia.
                </HeroBody>
                <ContactContainer></ContactContainer>
                <NavigationContainer>
                    <StyledH1Link to="/about">about.</StyledH1Link>
                    <StyledH1Link to="/projects">projects.</StyledH1Link>
                    <StyledH1Link to="/contact">contact.</StyledH1Link>
                </NavigationContainer>
                <SocialsContainerRight>
                    <a
                        href="https://github.com/kylemharman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kyle-harman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </SocialsContainerRight>
                <SocialsContainerLeft>
                    <a href="mailto:kylemartinharman@gmail.com" target="_top">
                        Email
                    </a>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </SocialsContainerLeft>
            </Container>
        </React.Fragment>
    );
}
