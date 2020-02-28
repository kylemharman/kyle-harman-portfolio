import React from "react";
// styles
import {
    NavigationOverlayNav,
    StyledNavLink,
    SocialsContainerRight,
    SocialsContainerLeft
} from "../styles/NavigationOverlayStyled";
// assets
import homeLinkImg from "../assets/home-link.jpg";
import aboutLinkImg from "../assets/about-link.jpg";
import projectsLinkImg from "../assets/projects-link.jpg";
import resume from "../assets/kyle-harman-resume.pdf";
import contactLinkImg from "../assets/contact-link.jpg";

const NavigationOverlay = props => {
    return (
        <NavigationOverlayNav active={props.active} onClick={props.clicked}>
            <div>
                <SocialsContainerLeft>
                    <a href="mailto:kylemartinharman@gmail.com" target="_top">
                        Email
                    </a>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </SocialsContainerLeft>
            </div>
            <div>
                <StyledNavLink to="/" background={homeLinkImg}>
                    Home.
                </StyledNavLink>
                <StyledNavLink to="/about" background={aboutLinkImg}>
                    About.
                </StyledNavLink>
                <StyledNavLink to="/projects" background={projectsLinkImg}>
                    Projects.
                </StyledNavLink>
                <StyledNavLink to="/contact" background={contactLinkImg}>
                    Contact.
                </StyledNavLink>
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
        </NavigationOverlayNav>
    );
};

export default NavigationOverlay;
