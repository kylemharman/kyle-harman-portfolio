import React from "react";
import { AboutContainer, AboutH1 } from "../styles/AboutStyled";
import aboutLinkImg from "../assets/about-link.jpg";
import portrait from "../assets/kyle-harman-6.jpg";

export default function About() {
    return (
        <AboutContainer>
            <div style={{ margin: "50px" }}>
                <AboutH1 background={aboutLinkImg}>About.</AboutH1>
                <h2>Hello, I am Kyle Harman.</h2>
                <div
                    style={{
                        height: "3px",
                        backgroundColor: "blue",
                        width: "40px"
                    }}
                ></div>
                <p>
                    I'm a creatively geared front-end developer. Combining my
                    passion for programming with an extensive background in
                    graphic design, I focus on creating user-centric, immersive
                    web applications.
                </p>
            </div>
            <div>
                <img src={portrait} alt="portrait" />
            </div>
            <div>
                <img src={portrait} alt="portrait" />
            </div>
            <div>
                <img src={portrait} alt="portrait" />
            </div>
        </AboutContainer>
    );
}
