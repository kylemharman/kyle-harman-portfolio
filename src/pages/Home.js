import React from "react";
import {
    HeroH1,
    HeroBody,
    StyledH1Link,
    NavigationContainer,
    HomeGrid
} from "../styles/HomeStyled";
import {
    SocialsContainerRight,
    SocialsContainerLeft
} from "../styles/NavigationOverlayStyled";
import resume from "../assets/kyle-harman-resume.pdf";
import homeLinkImg from "../assets/home-link.jpg";

export default function Home() {
    return (
        <React.Fragment>
            <HomeGrid>
                <div>
                    <SocialsContainerLeft>
                        <a
                            href="mailto:kylemartinharman@gmail.com"
                            target="_top"
                        >
                            Email
                        </a>
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </SocialsContainerLeft>
                </div>

                <div>
                    <HeroH1 background={homeLinkImg}>
                        Front End <br /> Developer
                    </HeroH1>
                    <HeroBody>
                        Living the dream in beautiful Sydney, Australia.
                    </HeroBody>
                </div>

                <div>
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
                </div>
            </HomeGrid>
            <NavigationContainer>
                <StyledH1Link to="/about">about.</StyledH1Link>
                <StyledH1Link to="/projects">projects.</StyledH1Link>
                <StyledH1Link to="/contact">contact.</StyledH1Link>
            </NavigationContainer>
        </React.Fragment>
    );
}
