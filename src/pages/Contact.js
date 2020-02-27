import React from "react";
import { ContactContainer, ContactH1 } from "../styles/ContactStyled";
import contactLinkImg from "../assets/contact-link.jpg";
import resume from "../assets/kyle-harman-resume.pdf";

export default function Contact() {
    return (
        <ContactContainer>
            <ContactH1
                href="mailto:kylemartinharman@gmail.com"
                target="_top"
                background={contactLinkImg}
            >
                Email.
            </ContactH1>
            <ContactH1
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                background={contactLinkImg}
            >
                Resume.
            </ContactH1>
            <ContactH1
                href="https://www.linkedin.com/in/kyle-harman/"
                target="_blank"
                rel="noopener noreferrer"
                background={contactLinkImg}
            >
                LinkedIn.
            </ContactH1>
            <ContactH1
                href="https://github.com/kylemharman"
                target="_blank"
                rel="noopener noreferrer"
                background={contactLinkImg}
            >
                GitHub.
            </ContactH1>
        </ContactContainer>
    );
}
