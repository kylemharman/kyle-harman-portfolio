import React from "react";
import { HeroH1 } from "../styles/HomeStyled";
import { Container } from "../styles/Global";
import contactLinkImg from "../assets/contact-link.jpg";

export default function Contact() {
    return (
        <Container>
            <HeroH1 background={contactLinkImg}>Contact.</HeroH1>
        </Container>
    );
}
