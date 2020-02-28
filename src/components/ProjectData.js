// icons
import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css3.svg";
import sass from "../assets/icons/sass.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import ruby from "../assets/icons/ruby.svg";
import rubyOnRails from "../assets/icons/rails.svg";
import node from "../assets/icons/node.svg";
import mongo from "../assets/icons/mongo.svg";
import express from "../assets/icons/express.svg";
// images
import ProjectZero from "../assets/project-ga-zero.jpg";
import ProjectOne from "../assets/project-ga-one.jpg";
import ProjectThree from "../assets/project-ga-three.jpg";

const projectData = [
    {
        key: "09uhecin",
        image: ProjectThree,
        title: "Simple Surf",
        copy:
            "Simple Surf is an application that simplifies surf forecasts in a beginner friendly way to understand. Built with the MERN stack.",
        linkToProject: "https://harman-simple-surf.herokuapp.com/",
        gitHubLink: "https://github.com/kylemharman/simple-surf",
        techIcons: [
            { icon: mongo, alt: "MongoDB", className: "mongo" },
            { icon: express, alt: "Express JS", className: "express" },
            { icon: react, alt: "React" },
            { icon: node, alt: "Node JS" }
        ]
    },
    {
        key: "klsfj0w8e",
        image: ProjectOne,
        title: "SeaScapers",
        copy:
            "SeaScapers is an Instagram-esque photo sharing app for sea scapes. Users share, comment and like photos with the SeaScapers community. Built with Ruby on Rails.",
        linkToProject: "https://seascapers.herokuapp.com/",
        gitHubLink: "https://github.com/kylemharman/seifx01-project-one",
        techIcons: [
            { icon: sass, alt: "sass", className: "sass" },
            { icon: javascript, alt: "JavaScript" },
            { icon: ruby, alt: "Ruby" },
            { icon: rubyOnRails, alt: "Ruby On Rails", className: "rails" }
        ]
    },
    {
        key: "vfgh8765",
        image: ProjectZero,
        title: "Tic Tac Toe",
        copy:
            "An easy to play Tic Tac Toe game. Built with vanilla JavaScript, HTML and CSS with a clean minimalistic design and fun, engaging animations.",
        linkToProject: "https://kylemharman.github.io/seifx01-project-zero/",
        gitHubLink: "https://github.com/kylemharman/seifx01-project-zero",
        techIcons: [
            { icon: html, alt: "HTML" },
            { icon: css, alt: "CSS" },
            { icon: javascript, alt: "JavaScript" }
        ]
    }
];

export default projectData;
