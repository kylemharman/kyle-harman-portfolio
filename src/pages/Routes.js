import React from "react";
import { Router } from "@reach/router";
import App from "../components/App";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Routes() {
	return (
		<div>
			<App />
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Projects path="/projects" />
				<Contact path="/contact" />
			</Router>
		</div>
	);
}
