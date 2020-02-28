import React from "react";
import { AboutContainer, AboutH1 } from "../styles/AboutStyled";
import aboutLinkImg from "../assets/about-link.jpg";
import portrait from "../assets/kyle-harman-6.jpg";

export default function About() {
    return (
        <AboutContainer>
            <div className="photo">
                <img src={portrait} alt="portrait" />
            </div>
            <div className="copy">
                <AboutH1 background={aboutLinkImg}>About.</AboutH1>
                <h2>Hello, I am Kyle Harman.</h2>
                <div
                    style={{
                        height: "3px",
                        backgroundColor: "blue",
                        width: "50px"
                    }}
                ></div>
                <p>
                    I'm a creatively geared front-end developer. Combining my
                    passion for programming with an extensive background in
                    graphic design, I focus on creating user-centric, immersive
                    web applications.
                </p>
                <p>
                    Solving problems has always been at the core of my work.
                    Creating an effective solution to a coding problem is the
                    best feeling, it’s what drives me, motivates me to keep
                    learning new technologies and become a better developer.
                </p>
                <p>
                    Thanks for stopping by, dont forget to check out my{" "}
                    <a
                        href="/projects"
                        alt="projects"
                        style={{ color: "blue" }}
                    >
                        projects
                    </a>{" "}
                    to see my latest work.
                </p>
            </div>
        </AboutContainer>
    );
}
